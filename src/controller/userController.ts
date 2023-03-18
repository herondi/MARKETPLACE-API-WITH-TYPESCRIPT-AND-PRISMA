import { prisma } from './../database/prisma';
import { Request, Response } from "express";


export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    const user = await prisma.user.create({
        data: { name, email, password },
    });

    return res.json(user);


}