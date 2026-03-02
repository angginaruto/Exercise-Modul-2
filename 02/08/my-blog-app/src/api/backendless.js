import Backendless from "backendless";

// Ambil ID ini dari Dashboard Backendless (Manage > App Settings)
const APP_ID = "FA18EE6D-B06B-46FD-A338-B75D93256E91";
const API_KEY = "B024184B-2B38-4148-9480-DFB92B3E3959";

Backendless.initApp(APP_ID, API_KEY);

export default Backendless;
