"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ChatbotWidget from "../Components/ChatbotWidget";
import VisitedCompany from "../Components/VisitedCompany";

// Add this to the admin page.tsx file

// Add these interfaces with the existing interfaces in the admin page
interface EmployeeBase {
  name?: string;
  linkedin_url?: string;
  location?: string;
}

interface Response1Employee extends EmployeeBase {
  value?: string; // email
  position?: string; // title
  first_name?: string;
  last_name?: string;
  department?: string;
  phone_number?: string;
  verification?: {
    status?: string;
    date?: string;
  };
}

interface Response2Employee extends EmployeeBase {
  id?: number;
  current_title?: string; // title
  teaser?: {
    emails?: string[];
    phones?: string[];
    personal_emails?: string[];
    professional_emails?: string[];
    is_premium_phone_available?: boolean;
  };
  city?: string;
  region?: string;
  country?: string;
  profile_pic?: string;
  status?: string;
  current_employer?: string;
  current_employer_website?: string;
  birth_year?: number;
}

interface Response3Employee extends EmployeeBase {
  email?: string;
  title?: string;
  phone?: string;
}

interface FormattedEmployee {
  name: string;
  email: string;
  linkedin_url: string;
  title: string;
  location: string;
  profile_pic?: string;
  department?: string;
  phone?: string;
  company?: string;
  company_website?: string;
  verification_status?: string;
  birth_year?: number | null;
  source: string;
}

// Define types for our data
interface Update {
  _id: string;
  title: string;
  description: string;
  eligibleBranches: string[];
  createdAt: string;
  updatedAt: string;
}

interface UpdateFormData {
  title: string;
  description: string;
}

// New interface for recruiter feedback
interface RecruiterFeedback {
  _id: string;
  name: string;
  organization: string;
  phone: string;
  rating: number;
  feedback: string;
  createdAt: string;
  __v: number;
}

const AdminPage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<
    "add" | "list" | "orders" | "updates" | "feedback" | "directory"
  >("add");
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);

  // New state for recruiter feedback
  const [recruiterFeedback, setRecruiterFeedback] = useState<
    RecruiterFeedback[]
  >([]);
  const [feedbackLoading, setFeedbackLoading] = useState<boolean>(false);

  //add company
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [ctc, setCtc] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleRoleChange = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleaddcompany = async () => {
    if (
      !companyLogo ||
      !companyName ||
      !description ||
      !ctc ||
      selectedRoles.length === 0
    ) {
      alert("Please fill all fields and select at least one role.");
      return;
    }

    const formData = new FormData();
    formData.append("image", companyLogo);
    formData.append("name", companyName);
    formData.append("description", description);
    formData.append("ctc", ctc);
    formData.append("roles_offered", JSON.stringify(selectedRoles)); // Important!

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/addcompany",
        formData
      );

      if (response.data.success) {
        alert("company data added successfully");
        // Reset form
        setCompanyLogo(null);
        setCompanyName("");
        setDescription("");
        setCtc("");
        setSelectedRoles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading data");
    }
  };

  // Updates state
  const [updates, setUpdates] = useState<Update[]>([]);
  const [updateFormData, setUpdateFormData] = useState<UpdateFormData>({
    title: "",
    description: "",
  });
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [editingUpdateId, setEditingUpdateId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const router = useRouter();

  const availableRoles = [
    "SDE",
    "Data Analyst",
    "DevOps Engineer",
    "Product Manager",
    "UI/UX Designer",
    "QA Tester",
    "Machine Learning Engineer",
    "Technical Support",
    "BDE",
    "Others",
  ];

  const availableBranches = [
    "Computer Science And Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Electronics Engineering",
    "Information Technology",
    "Civil Engineering",
    "MCA",
  ];

  const logout = () => {
    sessionStorage.removeItem("authtoken");
    router.push("/recruiter_login");
  };

  // Create this as a component within the AdminPage component

  const EmployeeDirectoryTab = () => {
    const [companyName, setCompanyName] = useState("");
    const [domain, setDomain] = useState("");
    const [employees, setEmployees] = useState<FormattedEmployee[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const formatEmployees = (data: any): FormattedEmployee[] => {
      const formattedEmployees: FormattedEmployee[] = [];

      if (data.data && Array.isArray(data.data)) {
        data.data.forEach((response: any) => {
          // Process Response-1 data
          if (
            response.source === "Response-1" &&
            Array.isArray(response.data)
          ) {
            response.data.forEach((emp: Response1Employee) => {
              formattedEmployees.push({
                name:
                  emp.name ||
                  `${emp.first_name || ""} ${emp.last_name || ""}`.trim() ||
                  "N/A",
                email: emp.value || "N/A",
                linkedin_url: emp.linkedin_url || "",
                title: emp.position || "N/A",
                location: emp.location || "N/A",
                department: emp.department || "",
                phone: emp.phone_number || "",
                verification_status: emp.verification?.status || "",
                source: "Response-1",
              });
            });
          }

          // Process Response-2 data
          if (
            response.source === "Response-2" &&
            Array.isArray(response.data)
          ) {
            response.data.forEach((emp: Response2Employee) => {
              let email = "N/A";
              let phone = "";

              // Extract email from teaser
              if (emp.teaser) {
                if (
                  emp.teaser.professional_emails &&
                  emp.teaser.professional_emails.length > 0
                ) {
                  email = `${emp.teaser.professional_emails[0]}`;
                } else if (emp.teaser.emails && emp.teaser.emails.length > 0) {
                  email = `${emp.teaser.emails[0]}`;
                } else if (
                  emp.teaser.personal_emails &&
                  emp.teaser.personal_emails.length > 0
                ) {
                  email = `${emp.teaser.personal_emails[0]}`;
                }

                // Extract phone
                if (emp.teaser.phones && emp.teaser.phones.length > 0) {
                  phone = emp.teaser.phones[0];
                }
              }

              const location =
                [emp.city, emp.region, emp.country]
                  .filter((item) => item)
                  .join(", ") || "N/A";

              formattedEmployees.push({
                name: emp.name || "N/A",
                email: email,
                linkedin_url: emp.linkedin_url || "",
                title: emp.current_title || "N/A",
                location: location,
                profile_pic: emp.profile_pic,
                company: emp.current_employer,
                company_website: emp.current_employer_website,
                phone: phone,
                birth_year: emp.birth_year || null,
                source: "Response-2",
              });
            });
          }

          // Process Response-3 data
          if (
            response.source === "Response-3" &&
            Array.isArray(response.data)
          ) {
            response.data.forEach((emp: Response3Employee) => {
              formattedEmployees.push({
                name: emp.name || "N/A",
                email: emp.email || "N/A",
                linkedin_url: emp.linkedin_url || "",
                title: emp.title || "N/A",
                location: emp.location || "N/A",
                phone: emp.phone || "",
                source: "Response-3",
              });
            });
          }
        });
      }

      return formattedEmployees;
    };

    const fetchEmployeeDetails = async () => {
      if (!companyName && !domain) {
        setErrorMsg("Please enter company name or domain.");
        return;
      }

      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");
      setEmployees([]);

      try {
        // Get the auth token for secure access
        const token = sessionStorage.getItem("authtoken");

        const response = await axios.post(
          "http://localhost:5000/api/admin/details",
          {
            company: companyName,
            domain: domain,
          },
          {
            headers: {
              Authtoken: token,
            },
          }
        );

        const data = response.data;
        console.log("Backend Response:", data);

        if (data && data.message === "Success") {
          const formattedEmployees = formatEmployees(data);

          if (formattedEmployees.length > 0) {
            setEmployees(formattedEmployees);
            setSuccessMsg(
              `Found ${formattedEmployees.length} employees at ${
                companyName || domain
              }`
            );
          } else {
            setErrorMsg(
              "No employee data available for this company currently."
            );
          }
        } else {
          setErrorMsg("Invalid response format from server.");
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setErrorMsg(
          "Failed to fetch data. Check your inputs or server connection."
        );
      } finally {
        setLoading(false);
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      fetchEmployeeDetails();
    };

    const getAge = (birthYear: number | null) => {
      if (!birthYear) return "";
      const currentYear = new Date().getFullYear();
      return `${currentYear - birthYear} years`;
    };

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">
          👥 Professional Directory
        </h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-5">
            <h3 className="text-xl font-bold text-white">Company Search</h3>
            <p className="text-blue-100 mt-1">
              Find professional details from target companies
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      placeholder="e.g., TCS"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="domain"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Domain
                    </label>
                    <input
                      id="domain"
                      type="text"
                      placeholder="e.g., tcs.com"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Searching...
                        </span>
                      ) : (
                        "Search Professionals"
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Enter at least one search parameter
                </p>
              </div>
            </form>

            {loading && (
              <div className="flex justify-center my-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            {errorMsg && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6 border border-red-200">
                <div className="flex">
                  <svg
                    className="h-5 w-5 text-red-400 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{errorMsg}</p>
                </div>
              </div>
            )}

            {successMsg && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6 border border-green-200">
                <div className="flex">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{successMsg}</p>
                </div>
              </div>
            )}

            {employees.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Professional
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Contact Details
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Profile Links
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.map((emp, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {emp.profile_pic ? (
                                <img
                                  src={emp.profile_pic}
                                  alt={emp.name}
                                  className="h-10 w-10 rounded-full mr-3"
                                />
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-3">
                                  <span className="text-white font-medium">
                                    {emp.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {emp.name}
                                </div>
                                {emp.company && (
                                  <div className="text-xs text-gray-500">
                                    {emp.company}
                                    {emp.birth_year && (
                                      <span className="ml-2 text-xs text-gray-400">
                                        • {getAge(emp.birth_year)}
                                      </span>
                                    )}
                                  </div>
                                )}
                                {emp.department && (
                                  <div className="text-xs text-gray-500">
                                    {emp.department}
                                  </div>
                                )}
                                <div className="text-xs text-gray-400 mt-1">
                                  Source: {emp.source}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm">
                              {emp.email && emp.email !== "N/A" ? (
                                <div className="flex items-center mb-1">
                                  <svg
                                    className="w-4 h-4 text-gray-400 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                  <a
                                    href={`mailto:${emp.email}`}
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    {emp.email}
                                  </a>
                                </div>
                              ) : (
                                <div className="flex items-center text-gray-400 mb-1">
                                  <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                  <span>Email not available</span>
                                </div>
                              )}
                              {emp.phone ? (
                                <div className="flex items-center">
                                  <svg
                                    className="w-4 h-4 text-gray-400 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    ></path>
                                  </svg>
                                  <a
                                    href={`tel:${emp.phone}`}
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    {emp.phone}
                                  </a>
                                </div>
                              ) : (
                                <div className="flex items-center text-gray-400">
                                  <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    ></path>
                                  </svg>
                                  <span>Phone not available</span>
                                </div>
                              )}
                              {emp.verification_status && (
                                <div className="text-xs mt-1">
                                  <span
                                    className={`px-2 py-1 rounded-full ${
                                      emp.verification_status.includes("accept")
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {emp.verification_status}
                                  </span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {emp.title || "N/A"}
                            </div>
                            {emp.company_website && (
                              <a
                                href={emp.company_website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-800 flex items-center mt-1"
                              >
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  ></path>
                                </svg>
                                Company Website
                              </a>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {emp.location !== "N/A" ? (
                                <div className="flex items-center">
                                  <svg
                                    className="w-4 h-4 text-gray-400 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    ></path>
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                  </svg>
                                  {emp.location}
                                </div>
                              ) : (
                                <span className="text-gray-500">
                                  Location not available
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex flex-col space-y-2">
                              {emp.linkedin_url ? (
                                <a
                                  href={emp.linkedin_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 inline-flex items-center bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md text-sm transition-colors"
                                >
                                  <svg
                                    className="w-4 h-4 mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                  </svg>
                                  LinkedIn Profile
                                </a>
                              ) : (
                                <span className="text-gray-400 inline-flex items-center">
                                  <svg
                                    className="w-4 h-4 mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                  </svg>
                                  LinkedIn not available
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {!loading && !errorMsg && employees.length === 0 && (
              <div className="bg-white border border-gray-200 rounded-lg text-center py-12 px-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No professionals found
                </h3>
                <p className="mt-2 text-base text-gray-500 max-w-md mx-auto">
                  Enter a company name or domain to search for professionals at
                  that organization.
                </p>
              </div>
            )}
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              Professional contact information is sourced from public data.
              Please use responsibly and in accordance with all applicable laws
              and regulations.
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to fetch recruiter feedback
  const fetchRecruiterFeedback = async () => {
    setFeedbackLoading(true);
    try {
      const token = sessionStorage.getItem("authtoken");
      const response = await axios.get(
        "http://localhost:5000/api/v1/recruiter/feedback",
        {
          headers: {
            Authtoken: token,
          },
        }
      );

      if (response.data.success) {
        setRecruiterFeedback(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching recruiter feedback:", error);
    } finally {
      setFeedbackLoading(false);
    }
  };

  const handleBranchChange = (branch: string) => {
    setSelectedBranches((prev) =>
      prev.includes(branch)
        ? prev.filter((b) => b !== branch)
        : [...prev, branch]
    );
  };

  // Handle input change for update form
  const handleUpdateInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdateFormData({
      ...updateFormData,
      [name]: value,
    });
  };

  // Fetch all updates
  const fetchUpdates = async () => {
    try {
      const token = sessionStorage.getItem("authtoken");
      const response = await axios.get("http://localhost:5000/api/v1/updates", {
        headers: {
          Authtoken: token,
        },
      });

      if (response.data.success) {
        setUpdates(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching updates:", error);
    }
  };

  // Submit update form
  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = sessionStorage.getItem("authtoken");

    try {
      const updateData = {
        ...updateFormData,
        eligibleBranches: selectedBranches,
      };

      if (isEditing && editingUpdateId) {
        // Update existing update
        await axios.put(
          `http://localhost:5000/api/v1/updates/${editingUpdateId}`,
          updateData,
          {
            headers: {
              Authtoken: token,
            },
          }
        );
      } else {
        // Create new update
        await axios.post(
          "http://localhost:5000/api/v1/updates/create",
          updateData,
          {
            headers: {
              Authtoken: token,
            },
          }
        );
      }

      // Reset form and refresh updates
      resetUpdateForm();
      fetchUpdates();
    } catch (error) {
      console.error("Error submitting update:", error);
    }
  };

  // Delete an update
  const handleDeleteUpdate = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this update?")) {
      try {
        const token = sessionStorage.getItem("authtoken");
        await axios.delete(`http://localhost:5000/api/v1/updates/${id}`, {
          headers: {
            Authtoken: token,
          },
        });

        // Refresh updates
        fetchUpdates();
      } catch (error) {
        console.error("Error deleting update:", error);
      }
    }
  };

  // Edit an update
  const handleEditUpdate = (update: Update) => {
    setUpdateFormData({
      title: update.title,
      description: update.description,
    });
    setSelectedBranches(update.eligibleBranches);
    setEditingUpdateId(update._id);
    setIsEditing(true);
    setActiveTab("updates");
  };

  // Reset update form
  const resetUpdateForm = () => {
    setUpdateFormData({
      title: "",
      description: "",
    });
    setSelectedBranches([]);
    setEditingUpdateId(null);
    setIsEditing(false);
  };

  useEffect(() => {
    const verify = async () => {
      const token = sessionStorage.getItem("authtoken");
      if (!token) {
        router.push("/recruiter_login");
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/verifyadmin",
          {
            headers: {
              Authtoken: token,
            },
          }
        );

        if (res.data.success) {
          setLoading(false);
          // Fetch updates after successful verification
          fetchUpdates();
        } else {
          router.push("/recruiter_login");
        }
      } catch (error: any) {
        console.error(
          "Admin verification failed:",
          error.response?.data || error.message
        );
        router.push("/recruiter_login");
      }
    };

    verify();
  }, [router]);

  // Load feedback data when the feedback tab is selected
  useEffect(() => {
    if (activeTab === "feedback") {
      fetchRecruiterFeedback();
    }
  }, [activeTab]);

  if (loading)
    return <div className="p-4 text-center pt-16">Loading admin data...</div>;

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="flex h-screen pt-16 bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div className="w-1/5 border-r p-4 bg-white shadow-md">
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("add")}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === "add"
                ? "bg-blue-100 border-blue-500 text-blue-800"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            ➕ Add Recruitment Data
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === "list"
                ? "bg-blue-100 border-blue-500 text-blue-800"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            ✅ Visited Companies
          </button>
          <button
            onClick={() => setActiveTab("directory")}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === "directory"
                ? "bg-blue-100 border-blue-500 text-blue-800"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            👥 Employee Directory
          </button>
          <button
            onClick={() => setActiveTab("updates")}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === "updates"
                ? "bg-blue-100 border-blue-500 text-blue-800"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            📢 Manage Updates
          </button>
          {/* New Feedback Button */}
          <button
            onClick={() => setActiveTab("feedback")}
            className={`w-full text-left px-4 py-2 border rounded transition ${
              activeTab === "feedback"
                ? "bg-blue-100 border-blue-500 text-blue-800"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            📝 Recruiter Feedback
          </button>
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 border rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {activeTab === "add" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">
              📤 Upload Recruitment Info
            </h2>

            {/* Company Logo Upload */}
            <div className="mb-6">
              <label className="block font-medium mb-1 text-gray-700">
                Company Logo
              </label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => setCompanyLogo(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
              />
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Google"
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief about the company or the drive"
                className="w-full border p-2 rounded h-28"
              />
            </div>

            {/* Roles Offered */}
            <div className="mb-6">
              <label className="block font-medium mb-2 text-gray-700">
                Roles Offered
              </label>
              {selectedRoles.length > 0 ? (
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedRoles.map((role) => (
                    <span
                      key={role}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 mb-4">No roles selected</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableRoles.map((role: string) => (
                  <label
                    key={role}
                    className="inline-flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      value={role}
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-gray-700">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CTC */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                CTC Offered (in LPA)
              </label>
              <input
                type="number"
                value={ctc}
                onChange={(e) => setCtc(e.target.value)}
                placeholder="e.g. 12"
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              onClick={handleaddcompany}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              ADD
            </button>
          </div>
        )}

        {activeTab === "list" && <VisitedCompany />}

        {activeTab === "orders" && (
          <div className="text-xl text-gray-700">
            🧾 Upcoming Drives section here...
          </div>
        )}

        {activeTab === "updates" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">
              {isEditing ? "✏️ Edit Update" : "📢 Add New Update"}
            </h2>

            {/* Update Form */}
            <form onSubmit={handleUpdateSubmit} className="mb-10">
              {/* Title */}
              <div className="mb-4">
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={updateFormData.title}
                  onChange={handleUpdateInputChange}
                  placeholder="e.g. Campus Drive Announcement"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={updateFormData.description}
                  onChange={handleUpdateInputChange}
                  placeholder="Detailed information about the update"
                  className="w-full border p-2 rounded h-28"
                  required
                />
              </div>

              {/* Eligible Branches */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-700">
                  Eligible Branches
                </label>

                {/* Selected Branches Display */}
                {selectedBranches.length > 0 ? (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {selectedBranches.map((branch) => (
                      <span
                        key={branch}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {branch}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mb-4">
                    No branches selected
                  </p>
                )}

                {/* Checkboxes */}
                <div className="grid grid-cols-2 gap-3">
                  {availableBranches.map((branch) => (
                    <label
                      key={branch}
                      className="inline-flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={branch}
                        checked={selectedBranches.includes(branch)}
                        onChange={() => handleBranchChange(branch)}
                        className="accent-green-600 w-4 h-4"
                      />
                      <span className="text-gray-700">{branch}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  {isEditing ? "Update" : "Add"}
                </button>

                {isEditing && (
                  <button
                    type="button"
                    onClick={resetUpdateForm}
                    className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            {/* Updates List */}
            <h3 className="text-xl font-semibold mb-4 text-blue-700 border-t pt-6">
              Current Updates
            </h3>

            {updates.length > 0 ? (
              <div className="space-y-4">
                {updates.map((update) => (
                  <div
                    key={update._id}
                    className="border rounded-lg p-4 bg-white shadow-sm"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-lg">{update.title}</h4>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleEditUpdate(update)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDeleteUpdate(update._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>

                    <p className="my-2 text-gray-600">{update.description}</p>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-1">
                        Eligible Branches:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {update.eligibleBranches.map((branch) => (
                          <span
                            key={branch}
                            className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                          >
                            {branch}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-gray-400">
                      Last updated:{" "}
                      {new Date(update.updatedAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No updates found. Add your first update above.
              </p>
            )}
          </div>
        )}

        {/* New Recruiter Feedback Section */}
        {activeTab === "feedback" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">
              📝 Recruiter Feedback
            </h2>

            {feedbackLoading ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Loading feedback data...</p>
              </div>
            ) : recruiterFeedback.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {recruiterFeedback.map((feedback) => (
                  <div
                    key={feedback._id}
                    className="bg-white rounded-lg shadow-md p-5 border border-gray-100"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {feedback.name}
                        </h3>
                        <p className="text-blue-600">{feedback.organization}</p>
                      </div>
                      <div className="text-yellow-500 text-lg font-semibold">
                        {renderStars(feedback.rating)}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 italic">
                      "{feedback.feedback}"
                    </p>

                    <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
                      <span>📞 {feedback.phone}</span>
                      <span>
                        🕒 {new Date(feedback.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No feedback data available yet.</p>
              </div>
            )}
          </div>
        )}

       {activeTab === 'directory' && (
        <EmployeeDirectoryTab />
        )}

      </div>

      {/* Chatbot Floating Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatbotOpen((prev) => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
          title="Chat with Placement Bot"
        >
          💬
        </button>
      </div>
      {/* Chatbot Widget */}
      <ChatbotWidget
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </div>
  );
};

export default AdminPage;
