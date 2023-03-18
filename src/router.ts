import { Router } from "express";

import { createUser } from "./controller/userController";


export const router = Router()

router.post("/user", createUser)