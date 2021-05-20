import { BrokerButton, BrokerInput } from "..";
import { useState, useEffect } from "react";
import { useToggle, useLoading } from "../../hooks";
import BrokerDialogue from "../alert-dialogue";
import { FiChevronDown } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import BrokerModal from "../modal";

const TemplateRecipient = ({onClose})=>{
    const [form, setForm] = useState("")
    const {loading, setLoading} = useLoading()
    const handleSubmit = ()=>{
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            onClose()
        },1000)
    }

    return(
        <div>
             <BrokerInput 
                name="recipient "
                value={form}
                disabled={loading}
                onChange={ ({target})=> setForm(target.value)}
                placeholder="Search for recipient  by email" />
                <div className="flex mt-4 justify-end">
                    <BrokerButton 
                        disabled={loading} 
                        onClick={handleSubmit} 
                        outlined>Cancel</BrokerButton>  
                    <BrokerButton  
                        onClick={handleSubmit}
                        type="submit" 
                        disabled={!form || loading} 
                        box="w-21 ml-4">Continue</BrokerButton>
                </div>
        </div>
    )
}


const validationProps = {
    schema:yup.object({
        subject: yup.string().required("Required"),
        message: yup.string().required("Required"),
    })
}

const TemplateForm = ({onClose})=>{
    const {loading, setLoading} = useLoading()
    const { 
        register, 
        handleSubmit,
        formState:{ isValid }
    } = useForm({
        mode: "all",
        resolver: yupResolver(validationProps.schema),
    })

    const onSubmit = values =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false);
            onClose()
        }, 1500)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <BrokerInput 
                    label="Subject"
                    name="subject"
                    placeholder="Enter Subject"
                    {...register("subject",{requierd: true})} />
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="content" >Template Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="3" 
                            className="shadow-sm p-4 block w-full focus:ring-blue-500 focus:border-blue-500 mt-1 sm:text-sm border rounded-md" 
                            placeholder="Message"
                            {...register("message",{requierd: true})} />
                    </div>
                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                        <BrokerButton onClick={onClose} outlined>Cancel</BrokerButton>
                        <BrokerButton type="submit" isLoading={loading} disabled={!isValid || loading} box="w-20 ml-4">Save</BrokerButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

const Template = ({
    scroll, 
    selected, 
    onEdit, 
    onConfirm, 
    onConfirmDelete, 
    setSelected, 
    id
})=>{
    
    return(
        <div 
            onClick={()=> setSelected(id)}
            className={`bg-white border-2 transition duration-200 hover:border-green-600 ${selected === id ? "border-green-600 transition duration-200" : "border-gray-200"}`}
            style={{height: "485px", maxWidth: "410px", width: "400px !important"}} >
            <div style={{height: "16%"}} className="p-3 border-b">
                <span className="text-xs font-medium">Subject</span>
                <h4 className="text-md whitespace-pre pb-1 overflow-x-auto font-bold">Notice for subscription expiry</h4>
            </div>
            <div style={{height: "70%"}} className="p-3 overflow-y-auto pt-1 bg-white border-b">
                <p className="text-sm pb-1 overflow-y-auto">
                    Oint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </p>
                <p className="text-sm mt-2 overflow-y-auto">
                    Pillum consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </p>
                <p className="text-sm mt-2 overflow-y-auto">
                    Nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </p>
                {
                    scroll && 
                    <p className="text-sm mt-2 overflow-y-auto">
                        Nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint  anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Si  anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Si. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                }
            </div>
            <div style={{height: "14%"}} className="flex p-3 bg-gray-50 space-x-2 justify-end">
                <BrokerButton onClick={onEdit} outlined>Edit</BrokerButton>
                {
                    selected === id ?
                    <BrokerButton 
                        onClick={onConfirm}
                        bg="bg-green-600" 
                        hoverBg="bg-green-700">Continue</BrokerButton>
                    :
                    <BrokerButton 
                        onClick={onConfirmDelete}
                        bg="bg-red-600" 
                        hoverBg="bg-red-700">Delete</BrokerButton>
                }
            </div>
        </div>
    )
}

const TemplateMenu = ({onClose:onCloseMenu, isPage})=>{
    const {toggle, setToggle } = useToggle()
    const {toggle:toggle2, setToggle:setToggle2 } = useToggle()
    const {toggle:toggle3, setToggle:setToggle3 } = useToggle()
    const [selected, setSelected] = useState("")
    const [type, setType] = useState(0)
    const [close, onClose] = useState(false)

    const handleMenu = ()=>{
        onClose(false);
        if(onCloseMenu) {
            setTimeout(()=> {
                onCloseMenu()
            }, 350)
        }
    }

    useEffect(()=>{
        onClose(true)
    },[])
    

    return(
        <>
            <div className={`h-full w-full bg-black bg-opacity-10 ${ isPage ? "static" : "fixed"} top-0 left-0 z-50`}>
                <div 
                    style={( isPage ? {} : {height : close ? "620px" : "0", transition: ".5s"})} 
                    className={`${ isPage ? "static" : "fixed"} transition duration-200  bottom-0 w-full bg-gray-100 pt-0`}>
                    <div className={`px-2 sm:px-6 text-sm flex flex-wrap justify-between items-center ${isPage ? "" : "border-b p-4 bg-white"}`}>
                        <div className="flex items-center space-x-4">
                            <h2 className="font-bold text-md sm:text-2xl">Choose from the Available templates </h2>
                            {
                                !isPage && 
                                <span
                                    onClick={handleMenu}
                                    title="Dismiss Menu" 
                                    className="h-10 w-10 block pl-3 pt-3 cursor-pointer text-lg text-lg rounded-full sm:cursor-pointer hover:bg-gray-100">
                                    <FiChevronDown />
                                </span>
                            }
                        </div>
                        { !isPage && <BrokerButton onClick={setToggle3}>New Template</BrokerButton> }
                    </div>
                    <div 
                        style={{height: isPage ? "auto" : "500px"}}
                        className={`p-4 cursor-default grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-y-auto justify-center lg:justify-start`}>
                        {
                            Array.from({length: 8}).map((a,i)=>( 
                                <Template
                                    onEdit={setToggle3}
                                    onConfirm={()=>{
                                        if(isPage){
                                            setType(1);
                                            setToggle3()
                                        }else{
                                            setToggle()
                                        }
                                    }}
                                    onConfirmDelete={setToggle2}
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    id={i} 
                                    scroll={( i % 2 !== 0 )} 
                                    key={i} />
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                toggle &&
                <BrokerDialogue
                isOpen={toggle}
                description={`Use NAME_HERE as your selected template?`}
                onContinue={handleMenu}
                onClose={setToggle} />
            }
            {
                toggle2 &&
                <BrokerDialogue
                isOpen={toggle2}
                description={`Delete NAME_HERE template?`}
                onContinue={handleMenu}
                onClose={setToggle2} />
            }
                <BrokerModal
                    title={type ? "Choose email recepient" : "Template Form"}
                    isOpen={ isPage?.isOpen || toggle3}
                    onClose={ isPage?.onOpen || setToggle3}>
                        {
                            type ? 
                            <TemplateRecipient onClose={()=>{
                                setToggle3();
                                setType(0)
                            }} />
                            :
                            <TemplateForm onClose={setToggle3} />
                        }
                </BrokerModal>
        </>
    )
}

export default TemplateMenu