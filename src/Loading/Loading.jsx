import { ClipLoader } from 'react-spinners';

function Loading() {
    return (
        <>
            <ClipLoader />
            <h2>... Loading in progress!</h2>
        </>
    )
}

export default Loading;