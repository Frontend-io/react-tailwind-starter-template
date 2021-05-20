import {useHistory} from 'react-router-dom'

const useRedirect = () => {
  const {push, ...rest} = useHistory()
  return {
    rest,
    redirect: push
  }
};

export default useRedirect;
