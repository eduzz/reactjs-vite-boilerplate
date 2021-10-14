import Box from '@eduzz/houston-ui/Box';
import Button from '@eduzz/houston-ui/Button';
import Typography from '@eduzz/houston-ui/Typography';

type WelcomeProps = {
  to: string;
};

export default function Welcome({ to }: WelcomeProps) {
  return (
    <Box xs={{ padding: 20 }}>
      <Typography size='normal'>Welcome to</Typography>
      <Typography size='xx-large' fontWeight='bold'>
        {to}
      </Typography>
      <p>
        <Button>Click me</Button>
      </p>
    </Box>
  );
}
