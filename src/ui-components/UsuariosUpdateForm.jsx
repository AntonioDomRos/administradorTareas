/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Usuarios } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsuariosUpdateForm(props) {
  const {
    id: idProp,
    usuarios: usuariosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    apellidoM: "",
    apellidoP: "",
    role: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellidoM, setApellidoM] = React.useState(initialValues.apellidoM);
  const [apellidoP, setApellidoP] = React.useState(initialValues.apellidoP);
  const [role, setRole] = React.useState(initialValues.role);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usuariosRecord
      ? { ...initialValues, ...usuariosRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setApellidoM(cleanValues.apellidoM);
    setApellidoP(cleanValues.apellidoP);
    setRole(cleanValues.role);
    setErrors({});
  };
  const [usuariosRecord, setUsuariosRecord] = React.useState(usuariosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Usuarios, idProp)
        : usuariosModelProp;
      setUsuariosRecord(record);
    };
    queryData();
  }, [idProp, usuariosModelProp]);
  React.useEffect(resetStateValues, [usuariosRecord]);
  const validations = {
    nombre: [],
    apellidoM: [],
    apellidoP: [],
    role: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          apellidoM,
          apellidoP,
          role,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Usuarios.copyOf(usuariosRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsuariosUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              apellidoM,
              apellidoP,
              role,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Apellido m"
        isRequired={false}
        isReadOnly={false}
        value={apellidoM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM: value,
              apellidoP,
              role,
            };
            const result = onChange(modelFields);
            value = result?.apellidoM ?? value;
          }
          if (errors.apellidoM?.hasError) {
            runValidationTasks("apellidoM", value);
          }
          setApellidoM(value);
        }}
        onBlur={() => runValidationTasks("apellidoM", apellidoM)}
        errorMessage={errors.apellidoM?.errorMessage}
        hasError={errors.apellidoM?.hasError}
        {...getOverrideProps(overrides, "apellidoM")}
      ></TextField>
      <TextField
        label="Apellido p"
        isRequired={false}
        isReadOnly={false}
        value={apellidoP}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM,
              apellidoP: value,
              role,
            };
            const result = onChange(modelFields);
            value = result?.apellidoP ?? value;
          }
          if (errors.apellidoP?.hasError) {
            runValidationTasks("apellidoP", value);
          }
          setApellidoP(value);
        }}
        onBlur={() => runValidationTasks("apellidoP", apellidoP)}
        errorMessage={errors.apellidoP?.errorMessage}
        hasError={errors.apellidoP?.hasError}
        {...getOverrideProps(overrides, "apellidoP")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={false}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM,
              apellidoP,
              role: value,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usuariosModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usuariosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
