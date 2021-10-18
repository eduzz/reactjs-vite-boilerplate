import { useSelector, useDispatch } from 'react-redux';

import Box from '@eduzz/houston-ui/Box';
import Button from '@eduzz/houston-ui/Button';
import createUseStyle from '@eduzz/houston-ui/styles/createUseStyles';
import Typography from '@eduzz/houston-ui/Typography';

import { decrement, increment } from '@/redux/slices/counter';
import { RootState } from '@/redux/store';

const useStyle = createUseStyle({
  buttons: {
    display: 'flex',
    gap: '0.5rem',
    margin: '1rem 0'
  }
});

type WelcomeProps = {
  to: string;
};

export default function Welcome({ to }: WelcomeProps) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const styles = useStyle();

  return (
    <Box xs={{ padding: 20 }}>
      <Typography size='normal'>Welcome to</Typography>
      <Typography size='xx-large' fontWeight='bold'>
        {to}
      </Typography>
      <div className={styles.buttons}>
        <Button variant='contained' onClick={() => dispatch(increment())}>
          +
        </Button>
        <Button variant='outlined' onClick={() => dispatch(decrement())}>
          -
        </Button>
      </div>
      <p>{count}</p>
    </Box>
  );
}
