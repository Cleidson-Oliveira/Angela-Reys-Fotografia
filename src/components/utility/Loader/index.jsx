import { TailSpin } from 'react-loading-icons'

import { Wrapper } from './style';

export default function Loader () {
    return (
        <Wrapper>
            <div><TailSpin stroke='#ff7b22' /></div>
            <p>loading ...</p>
        </Wrapper>
    )
}