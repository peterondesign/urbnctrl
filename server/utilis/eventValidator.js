const { body}=require("express-validator")


const eventBody = [body("name").isString()
.withMessage("name must be a string").notEmpty().withMessage("must not be empty"),
 body("email").notEmpty().withMessage("please fill in your email address"),
 body("url").notEmpty().withMessage("please fill in location url"),
 body("eventType").notEmpty().withMessage("please select an event type"),
 body("frequency").notEmpty().withMessage("please select a frequency"),
 body("description").notEmpty().withMessage("please describe the event briefly"),
 body("address").notEmpty().withMessage("please provide the event address"),
 body("startDay").notEmpty().withMessage("please provide the event start day"),
 body("startTime").notEmpty().withMessage("please provide a starting time"),
 body("endDay").notEmpty().withMessage("please provide an ending day"),
 body("img").notEmpty().withMessage("please provide an image"),
 body("endTime").notEmpty().withMessage("please provide an ending time"),
 body("vip").isNumeric().withMessage("please provide the number of vip tickets available"),
 body("regular").isNumeric().withMessage(" please provide the number of regular tickets available"),
 body("table").isNumeric().withMessage("please provide the number of table tickets available"),
]



module.exports ={eventBody}