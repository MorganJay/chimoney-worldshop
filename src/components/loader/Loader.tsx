import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface Props extends CircularProgressProps {
  top?: string | number;
}

const Loader = ({ top = 200, ...props }: Props) => {
  return (
    <CircularProgress
      size={50}
      sx={{
        position: 'absolute',
        top: top,
        left: 0,
        color: '#c45500',
        right: 0,
        margin: 'auto',
      }}
      {...props}
    />
  );
};

export default Loader;
