import './NotificationModal.scss';

interface Props {
  type: 'success' | 'fail',
  text: string,
}

export const NotificationModal: React.FC<Props> = ({type, text}) => (
  <div className={`notification notification--${type}`}>
    {text}
  </div>
)