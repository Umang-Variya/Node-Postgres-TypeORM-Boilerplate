import {unlink } from "fs";

export const unlinkFile = (file: string) => {
  unlink(file, (err) => {
    if (err) throw err;
    console.log(file + " was deleted");
  });
};



