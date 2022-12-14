const error400 = (error, request, response, next) => {
    if(error.code === "22P02"){
        response.status(400).send({msg: "Bad Request"})
    } else if (error.msg && error.status ){
        response.status(error.status).send({msg: error.msg})
    } else {
        next(error)
    }

}

const error404 = (request, response, next)=> {
    response.status(404).send({msg: "404 Not Found"})
}

const error500 = (error, request, response, next) => {
    response
      .status(500)
      .send({ msg: "500 Internal Server Error" });
  };

module.exports = {error400, error404, error500}
