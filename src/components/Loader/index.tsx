import { PulseLoader } from 'react-spinners'
import { LoaderContainer } from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <LoaderContainer>
      <PulseLoader color={`${colors.salmon}`} />
    </LoaderContainer>
  )
}

export default Loader
