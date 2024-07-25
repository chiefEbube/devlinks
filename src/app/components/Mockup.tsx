import Image from 'next/image'
import Frame from '../../../public/assets/icon/preview-section.svg'

const Mockup = () => {
    return (
        <div>
            <div>
                <Image src={Frame} width={287} height={532} alt='frame' />
            </div>

        </div>
    )
}

export default Mockup
