import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import TextField from "../ui/form-fields/TextField";
import { REGEX_EMAIL } from "../utils/regex";
import Button from "../ui/buttons/Button";

// Login form input props
interface LoginFormProps {
  loading: boolean;
  onSubmit: SubmitHandler<FieldValues>;
}

export default function LoginForm({ onSubmit, loading }: LoginFormProps) {
  // Initialize React Hook Form
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 1 }} className="w-full">
        <Grid container columnSpacing={3}>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="email"
              type="text"
              placeholder="Email address"
              required="Email is required."
              pattern={{
                value: REGEX_EMAIL,
                message: "Please enter a valid email address",
              }}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-center">
            <Button label="Let me in" loading={loading} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
