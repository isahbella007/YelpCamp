import Joi from "joi"

export const campValidation = (data) => { 
    const schema = Joi.object({ 
        campName: Joi.string().min(5).max(30).required(),
        campPrice: Joi.number().min(2).required(), 
        image: Joi.string().min(10).required(), 
        mini_description: Joi.string().min(10).required(), 
        description: Joi.string().min(20).required()
    })
    return schema.validate(data)
}

export const reviewValidation = (data) => { 
    const schema = Joi.object({ 
        camp_id: Joi.number().min(1).required(),
        comment: Joi.string().min(5).required()
    })
    return schema.validate(data)
}