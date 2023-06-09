import mongoose from '../db/connection.js';
import fetch from 'node-fetch';
import Permit from '../models/Permit.js';

const url = "https://data.cityofnewyork.us/resource/rbx6-tga4.json?$query=SELECT%0A%20%20%60job_filing_number%60%2C%0A%20%20%60filing_reason%60%2C%0A%20%20%60house_no%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60lot%60%2C%0A%20%20%60bin%60%2C%0A%20%20%60block%60%2C%0A%20%20%60c_b_no%60%2C%0A%20%20%60apt_condo_no_s%60%2C%0A%20%20%60work_on_floor%60%2C%0A%20%20%60work_type%60%2C%0A%20%20%60permittee_s_license_type%60%2C%0A%20%20%60applicant_license%60%2C%0A%20%20%60applicant_first_name%60%2C%0A%20%20%60applicant_middle_name%60%2C%0A%20%20%60applicant_last_name%60%2C%0A%20%20%60applicant_business_name%60%2C%0A%20%20%60applicant_business_address%60%2C%0A%20%20%60filing_representative_first_name%60%2C%0A%20%20%60filing_representative_middle_initial%60%2C%0A%20%20%60filing_representative_last_name%60%2C%0A%20%20%60filing_representative_business_name%60%2C%0A%20%20%60work_permit%60%2C%0A%20%20%60approved_date%60%2C%0A%20%20%60issued_date%60%2C%0A%20%20%60expired_date%60%2C%0A%20%20%60job_description%60%2C%0A%20%20%60estimated_job_costs%60%2C%0A%20%20%60owner_business_name%60%2C%0A%20%20%60owner_name%60%2C%0A%20%20%60owner_street_address%60%2C%0A%20%20%60owner_city%60%2C%0A%20%20%60owner_state%60%2C%0A%20%20%60owner_zip_code%60"

async function logNYCData() {
  const response = await fetch(url);
  const jsonData = await response.json();

  let structuredPermitData = jsonData.map(
    ({job_filing_number, filing_reason, house_no, street_name, borough, lot, bin, block, c_b_no, work_on_floor, work_type, permittee_s_license_type, applicant_license, applicant_first_name, applicant_last_name, applicant_business_name, applicant_business_address, filing_representative_first_name, filing_represenative_last_name, filing_representative_business_name, work_permit, approved_date, issued_date, expired_date, job_description, estimated_job_costs, owner_business_name, owner_name}) => {
      return {
        job_filing_number,
        filing_reason,
        house_no,
        street_name,
        borough,
        lot,
        bin,
        block,
        c_b_no,
        work_on_floor,
        work_type,
        permittee_s_license_type,
        applicant_license,
        applicant_first_name,
        applicant_last_name,
        applicant_business_name,
        applicant_business_address,
        filing_representative_first_name,
        filing_represenative_last_name,
        filing_representative_business_name,
        work_permit,
        approved_date,
        issued_date,
        expired_date,
        job_description,
        estimated_job_costs,
        owner_business_name,
        owner_name,
      };
  }
  );

  let insertData = async () => {
    await Permit.deleteMany({});
    await Permit.create(structuredPermitData);
    console.log('Data inserted');
  }
  
  insertData();
}

const minute = setInterval(() => {
  logNYCData();
}, 1000 * 60);

const hour = setInterval(() => {
  logNYCData();
}, 1000 * 60 * 60);

const day = setInterval(() => {
  logNYCData();
}, 1000 * 60 * 60 * 1440);
