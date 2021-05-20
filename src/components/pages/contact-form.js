import * as React from 'react';
import { 
    BrokerInput, 
    BrokerButton, 
} from "../../components";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form'
import { useLoading } from '../../hooks';


const validationProps = {
    schema:yup.object({
        first_name: yup.string().required("Required"),
        last_name: yup.string().required("Required"),
        email: yup.string().email("Email is invalid").required("Required"),
        phone_number: yup.number().required("Required"),
        employment: yup.string().required("Required"),
        referral_source: yup.string().required("Required"),
    }),
    form: [
        {name: "first_name", placeholder: "First Name"},
        {name: "last_name", placeholder: "Last Name"},
        {name: "email", type: "email", placeholder: "Email Address"},
        {name: "phone_number", type: "number", placeholder: "Phone Number"},
        {name: "employment", asSelect:["Regular Employee", "Self Employed", "Contractor"], placeholder: "Employment Type"},
        {name: "referral_source", asSelect:["Web search", "Realtor", "Social Media", "Prior Client", "Friend", "other"], placeholder: "Referral Source"},
    ]
}

const ContactForm = ({onClose, contact = {}})=>{
    const {loading, setLoading} = useLoading()
    const { 
        register, 
        handleSubmit,
        formState:{ isValid }
    } = useForm({
        mode: "all",
        resolver: yupResolver(validationProps.schema),
        defaultValues: contact
    })

    const onSubmit = values =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false);
            onClose()
        }, 1500)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-gray-200">
                <div className="mt-6">
                    <div className="mb-4">
                        <label for="photo" className="block mb-4 text-sm font-medium text-gray-700">
                            Photo
                        </label>
                        <div className="mt-2 flex items-center">
                            <span className="h-16 w-16 rounded-full relative overflow-hidden bg-gray-100">
                                <svg className="h-full z-10 w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </span>
                            <label className="ml-4 hover:opacity-75 p-2 cursor-pointer text-sm text-red-400" for="file-upload">
                                Upload Photo
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                validationProps.form.map((d,i)=> {
                                    return(
                                        <BrokerInput
                                            key={i}
                                            label={d.placeholder}
                                            {...d}
                                            {...register(d.name,{requierd: true})} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="flex justify-end">
                    <BrokerButton onClick={onClose} outlined>Cancel</BrokerButton>
                    <BrokerButton type="submit" isLoading={loading} disabled={!isValid || loading} box="w-20 ml-4">Save</BrokerButton>
                </div>
            </div>
        </form>
    )
}

export default ContactForm