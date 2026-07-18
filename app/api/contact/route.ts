import { NextResponse } from "next/server";

const fullFormRequiredFields = ["firstName", "lastName", "company", "email", "phone", "message"];
const compactFormRequiredFields = ["firstName", "company", "phone", "message"];

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const formType = getValue(formData, "formType");
  const requiredFields = formType === "compact" ? compactFormRequiredFields : fullFormRequiredFields;
  const missing = requiredFields.filter((field) => getValue(formData, field).length === 0);
  const email = getValue(formData, "email");

  if (missing.length > 0 || (email.length > 0 && !email.includes("@"))) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please complete all required fields with valid contact details.",
      },
      { status: 400 },
    );
  }

  const lead = {
    firstName: getValue(formData, "firstName"),
    lastName: getValue(formData, "lastName"),
    company: getValue(formData, "company"),
    email,
    phone: getValue(formData, "phone"),
    website: getValue(formData, "website"),
    industry: getValue(formData, "industry"),
    employees: getValue(formData, "employees"),
    currentWebsite: getValue(formData, "currentWebsite"),
    challenge: getValue(formData, "challenge"),
    services: formData.getAll("services").map(String),
    contactMethod: getValue(formData, "contactMethod"),
    meetingTime: getValue(formData, "meetingTime"),
    message: getValue(formData, "message"),
    receivedAt: new Date().toISOString(),
  };

  if (process.env.FRAMKANT_LEAD_WEBHOOK_URL) {
    await fetch(process.env.FRAMKANT_LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(lead),
    });
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your request has been received and is ready for CRM handoff.",
  });
}
