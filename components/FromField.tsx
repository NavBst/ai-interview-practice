import React from "react";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./ui/form";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input } from "./ui/input";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FromField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" placeholder={placeholder} {...field} type={type} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FromField;
