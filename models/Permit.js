import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const permitSchema = new mongoose.Schema({
  job_filing_number: String,
  filing_reason: String,
  house_no: String,
  street_name: String,
  borough: String,
  lot: Number,
  bin: Number,
  block: Number,
  c_b_no: Number,
  work_on_floor: String,
  work_type: String,
  permittee_s_license_type: String,
  applicant_license: Number,
  applicant_first_name: String,
  applicant_last_name: String,
  applicant_business_name: String,
  applicant_business_address: String,
  filing_representative_first_name: String,
  filing_represenative_last_name: String,
  filing_representative_business_name: String,
  work_permit: String,
  approved_date: Date,
  issued_date: Date,
  expired_date: Date,
  job_description: String,
  estimated_job_costs: Number,
  owner_business_name: String,
  owner_name: String,
})

export default mongoose.model('Permit', permitSchema);