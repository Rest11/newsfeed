import { Link, useMatch } from 'react-router-dom';

const activeStyle = (isActive: boolean) => ({
  color: isActive ? '#2AFFDE' : 'white'
})

interface Props {
  children: any,
  to: any,
  // any other props that come into the component, you don't have to explicitly define children.
  }

const CustomLink: React.FC<Props> = ({ children, ...props }) => {
  const isActive = !!useMatch({
    path : props.to,
    end  : props.to.length === 1,
  })

  return (
    <Link
     {...props}
     style = {activeStyle(isActive)}
    >
      {children}
    </Link>
)};

export { CustomLink };
