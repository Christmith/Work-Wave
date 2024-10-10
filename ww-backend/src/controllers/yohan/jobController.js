const jobService = require("../../services/yohan/jobService");

exports.createJob = async (req, res) => {
  try {
    const newJob = await jobService.createJob(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    console.log("Error creating job: ", error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getPendingJobsForServiceProvider = async (req, res) => {
  try {
    const jobs = await jobService.getPendingJobsForServiceProvider(
      req.params.email
    );
    res.status(200).json(jobs);
  } catch (error) {
    console.log(
      "Error getting pending jobs for service provider: ",
      error.message
    );
    res.status(500).json({ message: error.message });
  }
};

exports.getJobsForServiceProvider = async (req, res) => {
  try {
    const jobs = await jobService.getJobsForServiceProvider(req.params.email);
    res.status(200).json(jobs);
  } catch (error) {
    console.log("Error getting jobs for service provider: ", error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getAcceptedJobsForServiceProvider = async (req, res) => {
  try {
    const jobs = await jobService.getAcceptedJobsForServiceProvider(
      req.params.email
    );
    res.status(200).json(jobs);
  } catch (error) {
    console.log(
      "Error getting accepted jobs for service provider: ",
      error.message
    );
    res.status(500).json({ message: error.message });
  }
};

exports.updateBidForJob = async (req, res) => {
  try {
    const updatedJob = await jobService.updateBidForJob(
      req.params.email,
      req.body.jobId,
      req.body.bidAmount,
      req.body.bidDescription
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    console.log("Error updating bid for job: ", error.message);
    res.status(500).json({ message: error.message });
  }
};
