const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const interviewController = require("../controllers/interviewController")
const upload = require("../middleware/fileMiddleware")

const interviewRouter = express.Router()


interviewRouter.post("/", upload.single("resume"), interviewController.generateInterViewReportController)

interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewController.getInterviewReportByIdController)

interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController)

interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, interviewController.generateResumePdfController)



module.exports = interviewRouter