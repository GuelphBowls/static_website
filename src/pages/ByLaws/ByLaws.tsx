import './ByLaws.scss'

export default function ByLaws() {
	return (
		<article className="ByLaws">
			<header>
				<h1>By-Laws</h1>
				<p className="ByLaws__meta">Approved May 13th, 2023</p>
			</header>

			<section className="ByLaws__mission">
				<h2>Mission statement</h2>
				<p>
					To administer, co-ordinate, encourage, establish, operate and promote the operation of the Guelph Lawn Bowling Club Inc. for the purpose of fostering goodwill and sportsmanship amongst its members.
				</p>
				<p>
					To provide the opportunity for bowlers of all ages in Guelph and surrounding districts to participate at their level of ability and interest.
				</p>
			</section>

			<nav className="ByLaws__toc" aria-label="By-law contents">
				<h2>Contents</h2>
				<h3>By-Law 1</h3>
				<ol>
					<li value={1}>
						<a href="#bylaw-1-article-1">Name</a>
					</li>
					<li value={2}>
						<a href="#bylaw-1-article-2">Head Office</a>
					</li>
					<li value={3}>
						<a href="#bylaw-1-article-3">Purpose</a>
					</li>
					<li value={4}>
						<a href="#bylaw-1-article-4">Affiliation</a>
					</li>
					<li value={5}>
						<a href="#bylaw-1-article-5">Membership</a>
					</li>
					<li value={6}>
						<a href="#bylaw-1-article-6">Harassment/Abuse</a>
					</li>
					<li value={7}>
						<a href="#bylaw-1-article-7">Revocation of Membership</a>
					</li>
					<li value={8}>
						<a href="#bylaw-1-article-8">Alcoholic Beverages</a>
					</li>
					<li value={9}>
						<a href="#bylaw-1-article-9">Board of Directors</a>
					</li>
					<li value={10}>
						<a href="#bylaw-1-article-10">Board Meetings</a>
					</li>
					<li value={11}>
						<a href="#bylaw-1-article-11">Duties of Office Holders</a>
					</li>
					<li value={12}>
						<a href="#bylaw-1-article-12">Authority</a>
					</li>
					<li value={13}>
						<a href="#bylaw-1-article-13">Signing Officers</a>
					</li>
					<li value={14}>
						<a href="#bylaw-1-article-14">Remuneration of Officers, Directors, and Chairpersons</a>
					</li>
					<li value={15}>
						<a href="#bylaw-1-article-15">Committees</a>
					</li>
					<li value={16}>
						<a href="#bylaw-1-article-16">General Meeting</a>
					</li>
					<li value={17}>
						<a href="#bylaw-1-article-17">Extraordinary Expense</a>
					</li>
					<li value={18}>
						<a href="#bylaw-1-article-18">Amendments</a>
					</li>
					<li value={19}>
						<a href="#bylaw-1-article-19">Fiscal Year</a>
					</li>
					<li value={20}>
						<a href="#bylaw-1-article-20">Reserve Fund</a>
					</li>
					<li value={21}>
						<a href="#bylaw-1-article-21">Protection of Members, Officers, and Directors</a>
					</li>
					<li value={22}>
						<a href="#bylaw-1-article-22">Interpretation</a>
					</li>
				</ol>
				<h3>By-Law 2</h3>
				<ol>
					<li value={1}>
						<a href="#bylaw-2-article-1">Banking Resolution</a>
					</li>
				</ol>
			</nav>

			<section className="ByLaws__bylaw">
				<h2>By-Law 1</h2>
				<p className="ByLaws__intro">
					Letters Patent incorporating Guelph Lawn Bowling Club granted on Sept. 10, 2001. These by-laws relate generally to the transaction of the business and affairs of Guelph Lawn Bowling Club Inc.
				</p>

				<section id="bylaw-1-article-1" className="ByLaws__article">
					<h3>Article 1: Name</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">1.1</span>
						<div>
							<p>
								Be it enacted and is hereby enacted as a by-law of Guelph Lawn Bowling Club Inc. hereinafter called the “Club”.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-2" className="ByLaws__article">
					<h3>Article 2: Head Office</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">2.1</span>
						<div>
							<p>
								The Head Office of the Club shall be in the City of Guelph, in the County of Wellington, the Province of Ontario, and at such a place therein as the directors of the Club may from time to time decide. Currently at the Club House at 114 Gordon St., Guelph.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-3" className="ByLaws__article">
					<h3>Article 3: Purpose</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">3.1</span>
						<div>
							<p>
								To promote recreation, fellowship, enjoyment, and competitive sportsmanship through the sport of lawn bowling and any other compatible recreational sport as authorized by the general membership.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-4" className="ByLaws__article">
					<h3>Article 4: Affiliation</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">4.1</span>
						<div>
							<p>
								This Club shall be affiliated with the Ontario Lawn Bowls Association (OLBA).
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-5" className="ByLaws__article">
					<h3>Article 5: Membership</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">5.1</span>
						<div>
							<p>
								A member is a person who has paid their membership dues in full.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">5.2</span>
						<div>
							<p>
								The amount of the membership dues will be set by The Board when City of Guelph and OLBA fees are known.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">5.3</span>
						<div>
							<p>
								Fees shall be paid to the Treasurer of the Club.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">5.4</span>
						<div>
							<p>
								The Membership Cycle runs from the date on which a member’s application for membership is accepted until June First of the following calendar year.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-6" className="ByLaws__article">
					<h3>Article 6: Harassment/Abuse</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">6.1</span>
						<div>
							<p>
								The Club promotes an abuse-free, trusting environment in accordance with the OLBA’s Code of Conduct and its Harassment Policy for the general membership.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-7" className="ByLaws__article">
					<h3>Article 7: Revocation of Membership</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">7.1</span>
						<div>
							<p>
								Any member whose conduct on the Club premises, or elsewhere, which is considered by the Directors to be unbecoming of the character of the Club, or who willfully commits a breach or violation of any of the Club’s by-laws, or regulations will receive a disciplinary warning letter from The Board.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">7.2</span>
						<div>
							<p>
								Any member, after receiving a disciplinary warning letter, may have their membership revoked by a two-thirds (⅔) vote of The Board if the member’s conduct on the Club premises or elsewhere continues to be unbecoming of the Club or character of the Club.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">7.3</span>
						<div>
							<p>
								Such member(s) may make a written application for reinstatement to The Board and may be reinstated by the disciplinary Committee of The Board.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-8" className="ByLaws__article">
					<h3>Article 8: Alcoholic Beverages</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">8.1</span>
						<div>
							<p>
								Alcoholic beverages must not be brought into the Club by members or guests in compliance with the Ontario Liquor Control Act and regulations and the license Agreement with the City of Guelph, and members must adhere to such laws. If the Club incurs any penalty or liability by reason of a breach of these provisions by a member or member’s guest, such member shall indemnify the Club.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-9" className="ByLaws__article">
					<h3>Article 9: Board of Directors</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.1</span>
						<div>
							<p>
								The affairs of the Club shall be managed by a Board of Directors consisting of the following officers: President, Vice-President, and Treasurer, and a Secretary and up to three directors. The Board has the power to add members as required.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.2</span>
						<div>
							<p>
								All Directors shall be elected annually for a one (1) year term from the date of the Annual General. Each Director may stand for re-election if so nominated.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.3</span>
						<div>
							<p>
								The Past President is a non-voting, ex-officio member of The Board.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.4</span>
						<div>
							<p>
								The Vice-President shall assume and act in the role as President until a new President is elected if the elected President is unable to act for whatever reason. The Board has the authority to fill any vacancy that may occur. The members filling vacant positions must be elected, if nominated, at the next Annual General Meeting.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.5</span>
						<div>
							<p>
								The Past President of the Club, or another person or persons not on The Board appointed by The Board, becomes the Nominating Committee. The Nominating Committee shall prepare a slate of nominees for the election of Directors to The Board, having first secured consent of each nominee, and present the slate at the Annual General Meeting. Individual members may self–nominate. Additional nominations may be proposed by any member provided they have the consent of the nominee. The election of The Board of Directors shall be chaired by the Nominating Committee.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.6</span>
						<div>
							<p>
								All members eligible to vote are eligible to run to be a Board member and are eligible to hold any position on The Board.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.7</span>
						<div>
							<p>
								Individuals elected to The Board are not elected to a specific role.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.8</span>
						<div>
							<p>
								At the first meeting after the election of The Board, directors elected to The Board shall elect the following officers: President, Vice-President, and Treasurer as well as the Secretary.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.9</span>
						<div>
							<p>
								All records of the Club, including the bookkeeping records, tournament books, minute book are the property of the Club and shall be handed over by the outgoing officers to their successors within thirty (30) calendar days of the conclusion of their role. .
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">9.10</span>
						<div>
							<p>
								The Board shall approve annual financial statements that relate to the time period that began immediately after the end of the last completed financial year and ended not more than six months before the annual general meeting.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-10" className="ByLaws__article">
					<h3>Article 10: Board Meetings</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">10.1</span>
						<div>
							<p>
								Regular or special meetings of the Directors may be held at the call of the President or by the Vice-President or by any three members of The Board, by giving at least two days’ notice.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">10.2</span>
						<div>
							<p>
								Fifty percent (50%) plus one (1). members of The Board of Directors shall constitute a Quorum. The Past President is not counted in the determination of quorum.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">10.3</span>
						<div>
							<p>
								There shall be a minimum of eight (8) meetings of The Board of Directors during the year.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">10.4</span>
						<div>
							<p>
								The Board of Directors shall plan policy but not take action on major matters without the approval of a majority of the members present at a general meeting.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">10.5</span>
						<div>
							<p>
								Questions arising at any meeting of The Board shall be decided by a majority of votes. For greater clarity, the president can only cast one vote.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">10.6</span>
						<div>
							<p>
								A Board member may, if all the directors of the corporation consent, participate in a meeting of the directors or of a committee of directors by telephonic or electronic means that permits all participants to communicate adequately with each other during the meeting. A director so participating in a meeting is deemed for the purposes of this Act to be present at the meeting.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-11" className="ByLaws__article">
					<h3>Article 11: Duties of Office Holders</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.1</span>
						<div>
							<p>
								The President shall preside at all Board meetings of the Club, sign all instruments that require presidential signature, perform all duties incident to the presidential office, and have such other powers and duties as may from time to time be assigned. The President shall exercise the general supervision and control of all affairs of the Club and be an ex-officio member of all committees. The President does not have a vote at committee meetings and is not included in any determination of quorum of the committee.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.2</span>
						<div>
							<p>
								The Vice-President shall sign such contract, document or instrument in writing as require their signature and shall have and perform all powers incident to their office and such powers and duties as may from time to time be assigned to them by The Board of Directors or a general meeting of members. The Vice-President, in the absence or of the inability or refusal of the President to act on instructing of The Board of Directors and/or a general meeting of members, shall be vested with all the powers and shall perform the duties of the President.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.3</span>
						<div>
							<p>
								In that both the President and the Vice-President are absent or unable to perform their duties, the other Directors shall appoint one or more of their members to perform the duties of President or Vice-President.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.4</span>
						<div>
							<p>
								The Secretary shall: (a) conduct the Club’s correspondence; (b) retrieve and distribute correspondence received at the Club’s mailing address; (c) record the proceedings, deliberations and decisions at the Annual General Meeting and other meetings of the members and meetings of The Board of Directors.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.5</span>
						<div>
							<p>
								When warranted, an Assistant Secretary may be appointed and shall: (a) assist the Secretary in their duties;
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.6</span>
						<div>
							<p>
								The Treasurer shall: (a) be responsible for the care and custody of the financial assets of the Club as directed by The Board; (b) receive and disperse all funds; (c) keep records of the Club’s financial transactions; (d) provide an accurate account of all monies received and expended as requested by The Board; (e) present a financial statement the Club’s finances at the Annual General Meeting; (f) maintain an inventory of the physical assets of the Club.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.7</span>
						<div>
							<p>
								The Board has the discretion to request an audit or other financial review deemed appropriate.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">11.8</span>
						<div>
							<p>
								It is the duty of each Director to represent The Board’s policies, views, and programs in their dealings with the members of the Club.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-12" className="ByLaws__article">
					<h3>Article 12: Authority</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">12.1</span>
						<div>
							<p>
								The Board of Directors shall manage all property and business affairs of the Club, set the annual membership fee, and have power:
							</p>
							<ol type="a">
								<li>To appoint and remove any employee of the Club, prescribe duties, fix compensation, and require security for the faithful discharge of duties, if deemed advisable.</li>
								<li>To enact rules, policies, procedures, and guidelines for the management and operation of the Club.</li>
								<li>To do all such things as will be for the benefit of the Club in conformity with the By-Laws and License Agreement with the City of Guelph and the OLBA.</li>
								<li>To refuse or rescind membership in the Club for just cause.</li>
							</ol>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-13" className="ByLaws__article">
					<h3>Article 13: Signing Officers</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">13.1</span>
						<div>
							<p>
								Any two of President, Vice-President, Secretary, Treasurer shall sign all deeds, documents and contracts and other instruments requiring execution by the Club. For expenditures over Two Thousand Dollars ($2 000.00), the signature of at least one of the President or Vice-President is required. For Expenditures over Ten Thousand Dollars ($10 000.00) the signature of both the President and Vice President are required. Expenditures in excess of Ten Thousand Dollars ($10 000.00) require the passing of a motion at a meeting of The Board of Directors.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">13.2</span>
						<div>
							<p>
								Any license agreement, deeds, contracts, or other multi-year agreements between the Club and any other entity must be signed by the President and Vice-President.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">13.3</span>
						<div>
							<p>
								The Board may also direct, by special resolution, the signing of any such document or instrument by another member of The Board in the event that the President, Vice-President, Secretary, and/or Treasurer are unable to sign the document.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">13.4</span>
						<div>
							<p>
								The Club shall prepare and retain records including, the articles and bylaws, and any amendments; the minutes of any meetings of members and member committees, minutes of Board meetings and any Board committee meeting, resolutions, a register of officers, directors and members, and adequate financial records on a quarterly basis that enable directors to ascertain the financial position of the club with reasonable accuracy. Other documents as defined in the Not-For Profit Corporations Act must also be retained.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">13.5</span>
						<div>
							<p>
								Financial records must be retained for six (6) years at the head office or other place approved by The Board.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-14" className="ByLaws__article">
					<h3>Article 14: Remuneration of Officers, Directors, and Chairpersons</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">14.1</span>
						<div>
							<p>
								All officers, directors, and chairpersons, shall serve without any remuneration and no officer, director or chairperson shall directly or indirectly receive any profit from the position. Any officer, director or chairperson may be reimbursed for reasonable expenses incurred in the performance of the person’s duties if a detailed vendor receipt is submitted.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-15" className="ByLaws__article">
					<h3>Article 15: Committees</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">15.1</span>
						<div>
							<p>
								The Board of Directors may appoint any committee they deem necessary and may appoint any additional committees they deem necessary.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">15.2</span>
						<div>
							<p>
								Members of the Club who are not on The Board are eligible to serve on committees.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">15.3</span>
						<div>
							<p>
								Non-members of the Club having specific expertise may be appointed as ex-officio members of any committee from time to time.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-16" className="ByLaws__article">
					<h3>Article 16: General Meeting</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.1</span>
						<div>
							<p>
								The Annual General Meeting of the members of the Club shall be held at a time and on a day as directed by The Board of Directors but not later than the 30th day of October. The meeting shall receive reports of the executive, elect officers and directors as required and elect or appoint such others as are necessary for the proper conduct of the Club’s affairs, and transact all business that may properly come before the meeting. Any reports.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.2</span>
						<div>
							<p>
								The Spring General Meeting of the members of the Club shall be held at a time and place on a day after the Spring meeting of the OLBA in every year as directed by The Board of Directors but not later than May 31st. The meeting shall receive reports of The Board for the events scheduled for the current year and transact all business that may properly come before the meeting.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.3</span>
						<div>
							<p>
								Special general meetings of the members may be called:
							</p>
							<ol type="a">
								<li>by the President or Vice President</li>
								<li>by resolution of The Board</li>
								<li>on written request to the Board by at least 25 per cent of active, full members of the Club.</li>
								<li>The request or resolution shall specify the nature of the business to be brought before the Special General Meeting and no other business than that stated in the notice of meeting shall be transacted. Day, time, and place of all special general meetings shall be decided by the Board but must occur within Forty-Five (45) calendar days of receiving the request or resolution.</li>
							</ol>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.4</span>
						<div>
							<p>
								Notice of the date, time, and place for holding general meetings of members including annual and special meetings shall be given by The Board at least ten days prior to each member by mail or phone or e-mail and by posting on the Club bulletin Board, Social Media Account(s), and Website.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.5</span>
						<div>
							<p>
								At all Annual General and Special meetings of the Club, the presence of 15 per cent of full members in good standing shall constitute a quorum.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.6</span>
						<div>
							<p>
								All members in good standing that are 18 or older on the date of the vote have the right to vote. At a spring general meeting, anyone who was a member for the previous year’s lawn bowling season or who has paid their membership fees for the current year. Is eligible to vote. For a fall general meeting, anyone who is a member for the current season is eligible to vote.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">16.7</span>
						<div>
							<p>
								The omission to give notice or non-receipt of notice, by any member(s) shall not invalidate any resolution/motion passed or procedure taken.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-17" className="ByLaws__article">
					<h3>Article 17: Extraordinary Expense</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">17.1</span>
						<div>
							<p>
								Each and every proposed addition, renovation, or major repair to Club property or equipment, but excluding normal operating expenses within the approved Annual Budget, which individually amount to Ten Thousand Dollars ($10 000.00) or more in the fiscal year, shall require the approval of the majority of the members present at a General Meeting before the property or equipment is acquired or before the work is undertaken.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-18" className="ByLaws__article">
					<h3>Article 18: Amendments</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">18.1</span>
						<div>
							<p>
								The Board can recommend at any time an amendment or suspension of any Article of the By-Laws, which must be approved at a General Meeting of the members.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-19" className="ByLaws__article">
					<h3>Article 19: Fiscal Year</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">19.1</span>
						<div>
							<p>
								The fiscal year of the Club shall terminate on the 30 day of April each year or on such other date, as the Directors shall, by resolution, from time to time determine.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-20" className="ByLaws__article">
					<h3>Article 20: Reserve Fund</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">20.1</span>
						<div>
							<p>
								The Board may from time to time set aside sums as they deem fit to meet contingencies for repairing, improving and maintaining any of the property of the Club, replacing wasting assets, and for such other purposes as The Board shall, in their absolute discretion, think conducive to the interests of the Club, and may invest the several sums so set aside for such investments and dispose of all or any part thereof for the benefit of the Club, and may divide the reserve fund into such special funds as they may deem advisable in the business of the Club without being bound to keep same separate from other assets.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">20.2</span>
						<div>
							<p>
								The Board may also carry forward to the accounts of the succeeding year or years any net income or balance of net income which they shall not have reserved.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-21" className="ByLaws__article">
					<h3>Article 21: Protection of Members, Officers, and Directors</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">21.1</span>
						<div>
							<p>
								Members shall not, as such, be held answerable to or accountable for any act, default, obligation, or liability of the Club, or for any engagement, claim, payment, loss, injury, transaction, matter or thing relating to or connected with the Club.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">21.2</span>
						<div>
							<p>
								The Officers and Directors, for the time being, of the Club shall not be under any duty or responsibility in respect of any contract, act or transaction entered in the name or on behalf of the Club, except such as shall have been submitted to and authorized or approved by The Board.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">21.3</span>
						<div>
							<p>
								No Officer or Director of the Club shall be liable for the acts, receipts, neglects or default of any Officer or Director or employee, or for any loss, damage or expense happening to the Club through the insufficiency of title to any property acquired by the Club, or for or on behalf of the Club or for the insufficiency or deficiency of any security in or upon which any of the money of or belonging to the Club shall be placed out of or invested on behalf of the Club, or for the loss or damage from bankruptcy, insolvency to tortious act of any person, firm or corporation with whom or which any monies, securities or effects shall be lodged or deposited or for any loss, damage or misfortune whatever may happen in office or trust or in relation thereto, unless the same shall happen by or through their own wrongful and willful act or through their own willful neglect or default.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">21.4</span>
						<div>
							<p>
								Every Officer or Director of the Club and their heirs, executors and administrators, and estate and effects, respectively, shall, from time to time and at all times, be indemnified and save harmless, out of the funds of the Club, from and against: (i) all costs, charges and expenses whatsoever which the Officer or Director sustains or incurs in or about any actions, suit or proceedings which is brought, commenced or prosecuted against them in respect of any act, deed, matter or thing whatsoever made, done or permitted by them in or about the execution of the duties of their office, and (ii) all other costs, charges and expenses which he sustains or incurs in or about or in relation to the affairs thereof, except costs, charges or expenses occasioned be their own willful neglect or default.
							</p>
						</div>
					</div>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">21.5</span>
						<div>
							<p>
								If any Officer or Director of the Club shall be employed by or shall perform services for the Club otherwise than as an Officer or Director or shall be a member of a firm or shareholder, Director or Officer of a company which is employed by or performs services for the Club, this shall not disentitle such Officer or Director or such firm or company, as the case may be, from receiving proper remuneration for such services.
							</p>
						</div>
					</div>
				</section>

				<section id="bylaw-1-article-22" className="ByLaws__article">
					<h3>Article 22: Interpretation</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">22.1</span>
						<div>
							<p>
								In this By-law and all other By-Laws of the Club, words importing the singular number only shall include the plural and vice versa; words importing the masculine gender shall include all genders, “Board” shall mean Board of Directors of the Club; Articles of Incorporation” shall include Supplementary Letters of Incorporation, the Not-for-Profit Corporations Act; as amended from time to time or any act that may hereafter be substituted therefore.
							</p>
						</div>
					</div>
				</section>
			</section>

			<section className="ByLaws__bylaw">
				<h2>By-Law 2</h2>

				<section id="bylaw-2-article-1" className="ByLaws__article">
					<h3>Article 1: Banking Resolution</h3>
					<div className="ByLaws__clause">
						<span className="ByLaws__number">1.1</span>
						<div>
							<p>
								The Board has the responsibility for determining the official depository or depositories for the Club’s funds.
							</p>
						</div>
					</div>
				</section>
			</section>

			<footer className="ByLaws__footer">Guelph Lawn Bowling Club Inc., 114 Gordon St., Guelph, ON N1H 4H6</footer>
		</article>
	)
}