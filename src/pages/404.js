
const NotFound = ({match})=> {

    return(
        <div className="h-screen ">
            <div className="h-52 bg-gray-700 text-center p-8">
                <h1 className="sm:text-8xl text-4xl text-white">Ooooops :(</h1>
                <p className="text-gray-200 mt-4">The page you're looking for does not exist</p>
            </div>
            <div className="max-w-sm text-center mx-auto mt-16 px-8 ">
                The URL <b>{match.url}</b> does not exist
            </div>
        </div>
    )
}

export default NotFound