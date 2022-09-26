import styled from 'styled-components';

interface ProfileCardProps {
  img: {
    url: string,
    alt: string
  },
  title: string,
  children: React.ReactNode;
}

const StyledImg = styled.img`{
  width: inherit;
  max-width: 100px;
}`

const ProfileCard = (props: ProfileCardProps) => {
  const {
    img,
    title,
    children
  } = props;
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-xs-4">
          <StyledImg src={img.url} alt={img.alt} />
        </div>
        <div className="col-xs-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;