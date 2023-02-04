import React, { useContext, useRef } from "react";
import Image from "react-bootstrap/Image";
import { FormProvider } from "react-hook-form";
import {
  Context,
  ContextPost,
} from "../../../Context/publicationContext";
import { defaultUser } from "../../../components/Ejemplo";
import { useCreate } from "../../../Hooks/useCreate";
import "./PartsStyle.css";

export const CreatePost: React.FC<{}> = ({}) => {
  const { uploadMedia } = useContext(Context) as ContextPost;
  const {
    media,
    methods,
    register,
    handleSubmit,
    onSubmit,
    deleteImageFromMedia,
  } = useCreate();

  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    const file = event.target.files[0] as File;
    console.log(file,"Test");
    uploadMedia(URL.createObjectURL(file));
  };

  const handleClick = () => {
    fileRef?.current?.click();
  };


  return (
    <div className="container-fluid create-style">
      <div className="row p-3">
        <div className="col-1 px-1 pt-3 d-none d-md-inline">
          {/* DatosUsuario - Foto - Nombre*/}
          <Image
            src={defaultUser.photo}
            className="img-fluid"
            alt="logo"
            width={70}
            height={70}
            roundedCircle
          ></Image>
        </div>
        <div className="col-11 mt-3 p-0">        
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                placeholder="  Share with us :)"
                className="w-100"
                {...register("post")}
              ></textarea>
              <div className="container grid grid-cols-2 gap-2 mx-auto mb-2">
                {media.map((item, key) => (
                  <div key={key} className="btn-imagnBox">
                    <button
                      className="btn-imagen rounded-full bg-black absolute top-1 left-1 px-5 py-3 opacity-75"
                      onClick={() => {deleteImageFromMedia(item)}}
                    >
                      <i className="bi bi-x-circle"></i>
                    </button>
                    <img
                      src={item}
                      className="w-full rounded-md col-span-4 row-span-4"
                      width={200}
                      alt="ImageUpload"
                    />
                  </div>
                ))}
              </div>
              <div className="likes-btn">                
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleClick}
                >
                  <input
                    type="file"
                    accept="image/x-png, image/jpeg, image/jpg, image/gif"
                    onChange={handleChange}
                    ref={fileRef}
                    // style={{ display: "none" }}
                  />
                  <i className="bi bi-image"></i>
                </button>                
                <button className="btn btn-outline-secondary fluid">
                  <i className="bi bi-emoji-smile-fill"></i>
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-calendar-event"></i>
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-geo-alt-fill"></i>
                </button>
                <button className="btn btn-outline-secondary" type="submit">
                  Post
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};
