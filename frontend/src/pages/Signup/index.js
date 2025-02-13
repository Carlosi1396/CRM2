import React, { useState, useEffect } from "react";
import qs from "query-string";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";
import usePlans from "../../hooks/usePlans";
import { i18n } from "../../translate/i18n";
import { openApi } from "../../services/api";
import toastError from "../../errors/toastError";
import logo from "../../assets/logo.png";
import "./style.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, i18n.t("signup.errors.tooShort"))
    .max(50, i18n.t("signup.errors.tooLong"))
    .required(i18n.t("signup.errors.required")),
  companyName: Yup.string()
    .min(2, i18n.t("signup.errors.tooShort"))
    .max(50, i18n.t("signup.errors.tooLong"))
    .required(i18n.t("signup.errors.required")),
  password: Yup.string()
    .min(5, i18n.t("signup.errors.tooShort"))
    .max(50, i18n.t("signup.errors.tooLong")),
  email: Yup.string()
    .email(i18n.t("signup.errors.invalidEmail"))
    .required(i18n.t("signup.errors.required")),
  phone: Yup.string().required(i18n.t("signup.errors.required")),
});

const SignUp = () => {
  const history = useHistory();
  const { getPlanList } = usePlans();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  let companyId = null;
  const params = qs.parse(window.location.search);
  if (params.companyId !== undefined) {
    companyId = params.companyId;
  }

  const initialState = { name: "", email: "", password: "", phone: "", companyId, companyName: "", planId: "" };

  const [user] = useState(initialState);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const planList = await getPlanList();
      setPlans(planList);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSignUp = async (values) => {
    try {
      await openApi.post("/auth/signup", values);
      toast.success(i18n.t("signup.toasts.success"));
      history.push("/login");
    } catch (err) {
      toastError(err);
    }
  };

  return (
    <div className="root">
      <div className="container-signup">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <img src={logo} alt="Whats" className="logo" />
          <div className="header-text">
            <h4 className="h4">⚡ Regístrate</h4>
            <div>
              <span className="span">
                👋🏻 Comienza tu <b>prueba GRATUITA</b> de 3 días de Z1 en
                solo 3 pasos! <b>No te preocupes, no pedimos los datos de tu tarjeta.</b> 💳
              </span>
            </div>
          </div>
          <Formik
            initialValues={user}
            enableReinitialize={true}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSignUp(values);
                actions.setSubmitting(false);
              }, 400);
            }}
          >
            {({ touched, errors }) => (
              <Form className="form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="companyName"
                      label={i18n.t("signup.form.companyName")}
                      name="companyName"
                      error={touched.companyName && Boolean(errors.companyName)}
                      helperText={touched.companyName && errors.companyName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="name"
                      label={i18n.t("signup.form.name")}
                      name="name"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="email"
                      label={i18n.t("signup.form.email")}
                      name="email"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      name="password"
                      label={i18n.t("signup.form.password")}
                      type="password"
                      id="password"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="phone"
                      label={i18n.t("signup.form.phone")}
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth required>
                      <InputLabel htmlFor="plan-selection">{i18n.t("signup.form.plan")}</InputLabel>
                      <Field
                        as={Select}
                        id="plan-selection"
                        label={i18n.t("signup.form.plan")}
                        name="planId"
                      >
                        {plans.map((plan, key) => (
                          <MenuItem key={key} value={plan.id}>
                            {`${plan.name} - ${i18n.t("signup.form.attendants")}: ${plan.users} - ${i18n.t("signup.form.whatsapp")}: ${plan.connections} - ${i18n.t("signup.form.queues")}: ${plan.queues} - $ ${plan.amount}`}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" className="submit">
                  {i18n.t("signup.buttons.submit")}
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body1"
                      component={RouterLink}
                      to="/login"
                      className="link-login"
                    >
                      {i18n.t("signup.buttons.login")}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
        <div className="footer">
          <p className="p">
            Copyright ©{" "}
            <a href={"#"} target={"_blank"}>
              Z1{" "}
            </a>{" "}
            2024{" "}
          </p>
          <p className="p">
            Este sitio está protegido por reCAPTCHA Enterprise y la política de privacidad de Google 
            <a href={"https://policies.google.com/privacy"} target={"_blank"}>
              Política de Privacidad
            </a> 
            y 
            <a href={"https://policies.google.com/terms"} target={"_blank"}>
              Términos del Servicio
            </a>
          </p>
        </div>
        <Box mt={5}>{/* <Copyright /> */}</Box>
      </div>
      <div className={"container-img-signup"}>
      </div>
    </div>
  );
};

export default SignUp;