// src/Services/servicesApi.js
import Client from "./Client";

export const getServices = () => Client.get("/Services");
