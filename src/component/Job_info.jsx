// ========================== All Imports
import React    from 'react'
import { Link } from 'react-router-dom'

const Job_info = () => {
    return (
        <>
            {/* ==================== Job Info Part ==================== */}
            <section className='w-[1250px] py-10'>
                
                {/* ----- info ----- */}
                <p className='font-monstereat font-semibold text-[30px]'>About the job</p>
                <p className='font-monstereat font-normal text-[30px] mt-10'>
                    We are looking for someone with great organizational skills, has a passion for winning, and is client-centric. Ideally having a background working in an Advertising Agency, you are familiar with account management processes as well as working with internal teams.
                </p>

                {/* ----- responsibility part ----- */}
                <p className='font-monstereat font-semibold text-[30px] flex flex-col gap-4 mt-10'>Duties and Responsibilities</p>
                <ul className='font-monstereat font-normal text-[30px] mt-6 flex flex-col gap-8'>
                    <li className='flex gap-4'><span>∎</span> Leads efforts to identify, pursue and develop new lines of businesses that will be beneficial to client's various objectives</li>
                    <li className='flex gap-4'><span>∎</span> Provides efficient service to assigned client or partner professionally through</li>
                    <li className='flex gap-4'><span>∎</span> Handles digital marketing and media campaigns and solutions for a range of clients by communicating regularly with clients</li>
                    <li className='flex gap-4'><span>∎</span> Briefs project teams and monitors their performance against KPIs and targets</li>
                    <li className='flex gap-4'><span>∎</span> Further grows the partnership thru increase in spends, new projects and campaigns, and out of scope services</li>
                    <li className='flex gap-4'><span>∎</span> Understand client's business and marketing challenges to create marketing plans, scope campaigns, manage initiatives and upsell other AdSpark services</li>
                    <li className='flex gap-4'><span>∎</span> Timely coordinates and leads meetings between AdSpark and clients, creates and monitors financial (billing forecasts, invoice requests, and others) and status reports and submits them to concerned parties</li>
                    <li className='flex gap-4'><span>∎</span> Manages client feedback and inputs, challenges their thinking and enables them to understand more about digital and media, and clearly communicates objectives and challenges</li>
                    <li className='flex gap-4'><span>∎</span> Reviews strategic decks, calendars, proposals, media plans, and presentations with other relevant AdSpark business unit based on understanding of client business and issues</li>
                    <li className='flex gap-4'><span>∎</span> Write briefs, lead kick-off/download meetings for the project team, and work proactively with clients on feedback/approvals</li>
                    <li className='flex gap-4'><span>∎</span> Ensures that set critical deadlines are met by client as well as internal resources</li>
                    <li className='flex gap-4'><span>∎</span> Acts as an individual contributor and mentors new and junior members of the team, if needed.</li>
                    <li className='flex gap-4'><span>∎</span> Performs other company-related duties or projects that may be assigned from time-to-time.</li>
                </ul>

                {/* ----- Knowledge, Skills, and Abilities part ----- */}
                <p className='font-monstereat font-semibold text-[30px] flex flex-col gap-4 mt-16'>Knowledge, Skills, and Abilities</p>
                <ul className='font-monstereat font-normal text-[30px] mt-6 flex flex-col gap-8'>
                    <li className='flex gap-4'><span>∎</span> Understanding of the digital landscape</li>
                    <li className='flex gap-4'><span>∎</span> Experience in managing accounts and projects</li>
                    <li className='flex gap-4'><span>∎</span> Superb communication skills</li>
                    <li className='flex gap-4'><span>∎</span> Good organization and negotiation skills</li>
                    <li className='flex gap-4'><span>∎</span> Good understanding of both digital and traditional media</li>
                </ul>

                {/* ----- Duties and Responsibilities ----- */}
                <p className='font-monstereat font-semibold text-[30px] flex flex-col gap-4 mt-16'>Duties and Responsibilities</p>
                <ul className='font-monstereat font-normal text-[30px] mt-6 flex flex-col gap-8'>
                    <li className='flex gap-4'><span>∎</span> Open to graduates of Bachelor Degrees in Business, Advertising, Communication Arts</li>
                    <li className='flex gap-4'><span>∎</span> With at least 2+ years of experience in similar role</li>
                    <li className='flex gap-4'><span>∎</span> Creative, media and digital agency experience is a plus</li>
                    <li className='flex gap-4'><span>∎</span> Experience working within Corporate Brand guidelines</li>
                    <li className='flex gap-4'><span>∎</span> Possesses a deep passion and understanding of digital media, traditional media and brand marketing</li>
                    <li className='flex gap-4'><span>∎</span> Experience working with clients to develop and negotiate project scopes and budgets</li>
                    <li className='flex gap-4'><span>∎</span> Demonstrate familiarity with marketing concepts and terms and be able to communicate them clearly both in writing and orally</li>
                    <li className='flex gap-4'><span>∎</span> Must possess strong interpersonal skills; be able to work independently, multi-task, and meet deadlines with a confident, positive attitude</li>
                    <li className='flex gap-4'><span>∎</span> Thorough understanding of emotionally driven creative concepts</li>
                    <li className='flex gap-4'><span>∎</span> Proven ability to establish a direction and vision which mobilizes the creative team to meet clearly defined goals</li>
                    <li className='flex gap-4'><span>∎</span> Proficient in MS Office applications including Word, Excel, and PowerPoint</li>
                </ul>

                {/* ----- jpb apply button ----- */}
                <Link to="/apply form" className='flex justify-center mt-10'>
                    <button className='w-[380px] h-[60px] border-2 border-[#1E72B4] rounded-full font-monstereat font-medium text-2xl text-[#1E72B4] hover:bg-[#1E72B4] hover:text-white hover:scale-110 duration-200 will-change-transform '>APPLY</button>
                </Link>
            </section>
        </>
    )
}

export default Job_info