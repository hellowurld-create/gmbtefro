import type { BusinessCourse } from "../types/businessCourse";

export const businessCourses: BusinessCourse[] = [
  {
    id: "course-1",
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    shortDescription:
      "Build high-converting marketing funnels and sustainable customer acquisition systems.",
    description:
      "Learn how modern digital marketing systems attract, convert, retain, and turn customers into advocates. This course goes beyond basic social media promotion and introduces founders to funnel design, customer acquisition economics, retention strategy, content positioning, paid growth, and multi-channel marketing systems.",
    duration: "2 hours",
    level: "Intermediate",
    category: "Digital & Omnichannel Scale",
    whatYouWillLearn: [
      "Understand how modern digital marketing funnels work",
      "Apply TOFU, MOFU, and BOFU strategies to real businesses",
      "Calculate and interpret Customer Acquisition Cost (CAC)",
      "Understand Customer Lifetime Value (LTV) and unit economics",
      "Design retention systems that reduce customer churn",
      "Build structured referral and advocacy programmes",
      "Compare SEO, paid acquisition, email, and B2B outbound channels",
      "Select the right KPIs for each stage of the customer journey",
    ],
    modules: [
      {
        id: "digital-funnel",
        title: "The Modern Digital Funnel",
        description:
          "Understand how customers move from awareness to conversion, retention, and advocacy, and how each stage requires a different marketing objective.",
        lessons: [
          {
            id: "digital-funnel-blueprint",
            slug: "modern-digital-funnel-blueprint",
            title: "The Modern Digital Funnel Blueprint",
            duration: "30 min",
            introduction:
              "A modern marketing funnel is not simply a sequence of advertisements. It is a structured system that helps a business attract the right people, build trust, convert interest into revenue, retain customers, and encourage referrals.",
            content: [
              "The traditional marketing funnel is often shown as a straight line: awareness, consideration, and purchase. In practice, modern customers rarely behave in such a simple way. A potential customer may discover a brand on social media, read a review weeks later, visit the website through Google, subscribe to an email list, leave without buying, return after seeing a testimonial, and finally purchase after receiving a targeted offer. This means founders should think of marketing as an interconnected customer journey rather than a single campaign.",

              "The first stage is Top of Funnel, commonly called TOFU. The objective here is qualified attention. The goal is not to reach everyone. It is to reach people who have a problem, interest, or need that your business can solve. Common TOFU channels include educational content, search engine optimisation, short-form videos, podcasts, partnerships, community engagement, events, and paid advertising. A strong TOFU message usually focuses on the customer's problem rather than aggressively promoting the product.",

              "The second stage is Middle of Funnel, or MOFU. At this stage, the audience is aware of the problem and is beginning to compare possible solutions. The business must build trust and demonstrate expertise. Useful MOFU assets include case studies, email sequences, webinars, product demonstrations, free templates, checklists, calculators, industry reports, and comparison guides. The objective is to move the customer from curiosity to confidence.",

              "The third stage is Bottom of Funnel, or BOFU. This is where the customer is close to making a decision. Their questions become more practical: How much does it cost? Will it work for me? How difficult is implementation? What happens if it fails? Strong BOFU strategies reduce uncertainty through testimonials, detailed case studies, transparent pricing, guarantees, trials, consultations, demonstrations, and clearly structured calls to action.",

              "The fourth stage is retention. Many businesses make the mistake of treating the purchase as the end of marketing. In reality, acquisition is expensive, and long-term profitability often depends on repeat purchases, renewals, upgrades, or continued engagement. Retention therefore begins immediately after the first transaction. A good onboarding experience should help the customer reach their first meaningful result as quickly as possible.",

              "The fifth stage is advocacy. When customers consistently receive value, they may become promoters of the business. However, relying only on spontaneous recommendations is weak strategy. Founders can create deliberate advocacy systems through referral programmes, affiliate schemes, customer communities, testimonials, ambassador programmes, loyalty rewards, and user-generated content.",

              "A useful way to evaluate the funnel is to ask one question at every stage: what is the next meaningful action we want the customer to take? At TOFU it may be reading an article. At MOFU it may be downloading a guide. At BOFU it may be booking a demo. During retention it may be completing onboarding. During advocacy it may be referring another customer. Each stage should have a measurable next step.",

              "For example, imagine a founder selling bookkeeping software to small businesses. TOFU content may explain common financial mistakes. MOFU may offer a free cash-flow template. BOFU may provide a live demonstration and free trial. Retention may include onboarding emails and monthly reports. Advocacy may reward customers for referring another business owner. The funnel becomes a connected system rather than isolated marketing activities."
            ],
            keyPoints: [
              "Marketing funnels should be designed around customer behaviour, not company assumptions.",
              "TOFU focuses on qualified attention, not random reach.",
              "MOFU builds trust and demonstrates expertise.",
              "BOFU reduces risk and helps customers make a decision.",
              "Retention is essential because long-term profitability often depends on repeat value.",
              "Advocacy can be designed through structured referral systems.",
              "Every funnel stage should have a measurable next action."
            ],
            quote:
              "Do not ask, 'How do we get more traffic?' Ask, 'How do we move the right customer to the next meaningful action?'",
          },
          {
            id: "cac-ltv",
            slug: "understanding-cac-and-ltv",
            title: "Understanding CAC and LTV",
            duration: "25 min",
            introduction:
              "Customer Acquisition Cost and Customer Lifetime Value are two of the most important metrics for understanding whether a growth strategy is financially sustainable.",
            content: [
              "Customer Acquisition Cost, or CAC, represents the average amount a business spends to acquire one new customer. A common mistake is to calculate CAC using only advertising spend. A more complete calculation should include relevant marketing expenses, sales salaries, commissions, marketing software, agency fees, creative production, and other costs directly connected to customer acquisition.",

              "For example, imagine a company spends £4,000 on advertising, £2,000 on sales salaries, and £1,000 on marketing software during one month. If it acquires 100 new customers, the fully loaded acquisition cost is £70 per customer. Looking only at advertising spend would incorrectly suggest that CAC is £40.",

              "Customer Lifetime Value, or LTV, estimates the economic value generated by a customer over the entire relationship with the business. In a simple transactional business, LTV may be estimated using average order value, purchase frequency, customer lifespan, and gross margin. In a subscription business, LTV may be estimated using average monthly revenue per customer, gross margin, and average retention period.",

              "The relationship between LTV and CAC matters more than either number in isolation. A business may have a high CAC and still be healthy if each customer produces significantly greater lifetime value. On the other hand, a low CAC does not automatically mean the business is healthy if customers spend very little and leave quickly.",

              "Many founders use an LTV to CAC ratio as a general health indicator. A ratio around 3:1 is often considered a useful benchmark because the value generated by a customer is substantially higher than the acquisition cost. However, this is not a universal law. The right ratio depends on gross margin, cash flow, payback period, business model, and growth strategy.",

              "CAC payback period is another important concept. It measures how long it takes the business to recover the money spent acquiring a customer. A company may have strong lifetime value but still experience dangerous cash-flow pressure if it takes too long to recover acquisition costs.",

              "Founders should also compare blended CAC and channel-specific CAC. Channel-specific CAC shows how efficiently a particular channel performs. Blended CAC considers the entire acquisition system, including organic and paid customers. Looking at both helps prevent poor decisions based on one advertising dashboard.",

              "The purpose of these metrics is not simply reporting. They should guide decisions. If CAC rises while LTV remains stable, the business may need to improve targeting, conversion, pricing, or retention. If LTV falls, the business may need to improve customer experience, product quality, repeat purchase behaviour, or account expansion."
            ],
            formula: {
              title: "Core Growth Economics",
              formula:
                "CAC = Total Sales & Marketing Cost ÷ New Customers Acquired\nLTV = Average Order Value × Purchase Frequency × Customer Lifespan × Gross Margin %\nTarget Benchmark: LTV : CAC ≈ 3 : 1",
              description:
                "Use these as decision-making tools, not rigid rules. Always consider cash flow, payback period, gross margin, and business model."
            },
            keyPoints: [
              "CAC should include more than advertising spend.",
              "LTV measures the economic value of a customer over time.",
              "A strong LTV does not remove the need to manage cash flow.",
              "CAC payback period matters because businesses can fail before recovering acquisition costs.",
              "Compare blended CAC with channel-specific CAC.",
              "Use CAC and LTV to guide marketing, retention, pricing, and growth decisions."
            ],
          },
          {
            id: "multi-channel",
            slug: "multi-channel-acquisition",
            title: "Multi-Channel Acquisition Strategies",
            duration: "30 min",
            introduction:
              "A resilient business does not depend entirely on one marketing platform. Multi-channel acquisition creates multiple pathways through which customers can discover, trust, and buy from a business.",
            content: [
              "A company that depends entirely on one acquisition channel is exposed to platform risk. Advertising costs can increase, algorithms can change, accounts can be restricted, and customer behaviour can shift. Diversification helps protect the business and gives founders more control over growth.",

              "Organic search, or SEO, focuses on creating content that answers questions potential customers are already searching for. High-quality SEO can produce compounding traffic over time. However, it usually requires patience, topical authority, good technical performance, and content that is genuinely more useful than competing pages.",

              "Paid acquisition provides faster feedback. Platforms such as Google, Meta, LinkedIn, TikTok, and other advertising networks can place offers directly in front of selected audiences. Paid channels are useful for testing positioning, creative ideas, offers, and landing pages. Their weakness is cost volatility. As competition increases or creative performance declines, acquisition costs may rise quickly.",

              "Email marketing is an owned channel. Unlike social media followers, an email list gives the business a more direct relationship with its audience. Effective email systems segment customers according to interests, behaviour, lifecycle stage, or purchase history rather than sending the same message to everyone.",

              "B2B outbound acquisition involves directly contacting potential customers. This can include LinkedIn outreach, email prospecting, partnerships, events, and targeted introductions. Effective outbound focuses on relevance. Generic mass messages usually perform poorly because decision-makers quickly recognise them as automated or irrelevant.",

              "A practical multi-channel system assigns a clear role to each channel. One channel may create awareness, another may capture leads, another may nurture trust, and another may convert. For example, LinkedIn content may create awareness, a downloadable guide may capture an email address, email may nurture the relationship, and a consultation call may close the sale.",

              "Founders should avoid expanding into too many channels at once. A better approach is to prove one or two channels, document what works, and then add additional channels gradually. Every channel should have a defined objective, target audience, key metric, expected cost, and review cycle.",

              "A useful channel review asks: Does this channel reach the right audience? Does it produce qualified leads? How long does conversion take? What is the CAC? What is the retention quality of customers acquired from this channel? The cheapest lead is not always the most valuable customer."
            ],
            keyPoints: [
              "Channel diversification reduces dependence on algorithms and advertising platforms.",
              "SEO provides long-term compounding potential but requires quality and patience.",
              "Paid acquisition offers speed and testing capability but must be monitored closely.",
              "Email is an owned channel that supports direct customer relationships.",
              "B2B outbound works best when it is highly relevant and personalised.",
              "Scale channels gradually rather than spreading resources too thin.",
              "Evaluate customer quality, not just lead volume."
            ],
          },
        ],
      },
    ],
  },

  {
    id: "course-2",
    slug: "business-analytics-basics",
    title: "Business Analytics Basics",
    shortDescription:
      "Use business data, KPIs, and performance metrics to make smarter decisions.",
    description:
      "Learn how to turn raw business data into useful decisions. This course introduces actionable metrics, vanity metrics, churn, retention, North Star Metrics, KPI dashboards, leading and lagging indicators, and practical root-cause analysis.",
    duration: "2 hours",
    level: "Beginner",
    category: "Data Strategy & Metrics",
    whatYouWillLearn: [
      "Differentiate actionable metrics from vanity metrics",
      "Understand customer churn and retention",
      "Select KPIs that match your business model",
      "Define a useful North Star Metric",
      "Use leading and lagging indicators",
      "Build a focused management dashboard",
      "Apply root-cause analysis using the 5 Whys",
      "Turn data into business decisions"
    ],
    modules: [
      {
        id: "business-data",
        title: "Understanding Business Data",
        description:
          "Learn how to identify the numbers that explain business performance and avoid becoming distracted by metrics that look impressive but do not support decisions.",
        lessons: [
          {
            id: "actionable-metrics",
            slug: "actionable-vs-vanity-metrics",
            title: "Actionable vs Vanity Metrics",
            duration: "25 min",
            introduction:
              "The purpose of analytics is not to collect the largest number of metrics. It is to identify the smallest set of numbers that helps a team understand what is happening, why it is happening, and what action should be taken next.",
            content: [
              "Vanity metrics are numbers that can appear impressive without necessarily reflecting real business health. Examples include total followers, total app downloads, page views, total registered users, or impressions. These numbers are not automatically useless, but they become vanity metrics when they are presented without connection to meaningful behaviour or outcomes.",

              "For example, an online learning platform may celebrate reaching 100,000 registered users. However, if only 2,000 users return each month and only 200 complete a course, registrations alone provide an incomplete picture. Activation rate, course completion rate, monthly active users, retention, and paid conversion may be more useful.",

              "Actionable metrics are connected to decisions. If the metric changes, the team knows what area to investigate. Examples include conversion rate, activation rate, customer retention, average revenue per user, gross margin, churn, repeat purchase rate, and time to first value.",

              "A strong metric usually has context. Instead of saying revenue increased to £50,000, ask: compared with what period? Was the increase caused by more customers, higher prices, repeat purchases, or one unusually large contract? Context turns numbers into information.",

              "Founders should also distinguish between absolute numbers and rates. A company can gain more customers while its conversion rate becomes worse. Looking at both volume and efficiency provides a clearer view.",

              "Every important metric should have an owner, a definition, a reporting frequency, and a decision connected to it. If a team cannot explain what action could follow from a metric, the metric may not deserve prominent space on the dashboard."
            ],
            keyPoints: [
              "A metric is useful when it helps explain behaviour or guide a decision.",
              "Vanity metrics can be misleading when presented without context.",
              "Use both absolute numbers and rates.",
              "Define metrics consistently so teams do not calculate them differently.",
              "Every important KPI should connect to a business question."
            ],
          },
          {
            id: "customer-churn",
            slug: "understanding-customer-churn",
            title: "Understanding Customer Churn",
            duration: "25 min",
            introduction:
              "Churn is one of the clearest signals of whether customers continue to receive value after acquisition.",
            content: [
              "Customer churn measures the proportion of customers who leave, cancel, or stop paying during a defined period. For subscription businesses, churn is especially important because growth depends on both acquiring new customers and keeping existing ones.",

              "A company that acquires 100 new customers but loses 90 existing customers has very different economics from a company that acquires 100 and loses 10. This is why acquisition numbers should never be analysed without retention.",

              "Logo churn measures the percentage of customer accounts lost. Revenue churn measures the percentage of recurring revenue lost. These two measures can tell different stories. Losing ten small accounts may create high logo churn but relatively low revenue churn. Losing one large enterprise account may create low logo churn but high revenue churn.",

              "Net Revenue Retention goes a step further by considering upgrades, expansion, downgrades, and churn. A company may lose some customers but still grow revenue from existing accounts if successful customers expand their usage.",

              "High churn should trigger investigation rather than immediate marketing expansion. Possible causes include poor onboarding, weak product quality, incorrect customer targeting, pricing mismatch, lack of customer support, missing features, or customers failing to reach value quickly.",

              "Cohort analysis is useful because it groups customers according to when they joined or another shared characteristic. This allows founders to compare whether newer customer groups are retaining better or worse than earlier groups."
            ],
            formula: {
              title: "Monthly Customer Churn Rate",
              formula:
                "Monthly Churn Rate = Customers Lost During Month ÷ Customers at Start of Month × 100",
              description:
                "Always define the time period and customer population clearly before comparing churn."
            },
            keyPoints: [
              "Growth is acquisition minus loss.",
              "Track both customer churn and revenue churn when relevant.",
              "High churn often indicates a value, onboarding, targeting, or experience problem.",
              "Cohort analysis reveals whether retention is improving over time.",
              "Retention quality should influence how aggressively a company spends on acquisition."
            ],
          },
          {
            id: "kpi-dashboard",
            slug: "building-a-kpi-dashboard",
            title: "Building a High-Performance KPI Dashboard",
            duration: "30 min",
            introduction:
              "A good dashboard does not show everything. It creates focus by showing the small number of indicators that matter most for a specific decision-maker.",
            content: [
              "A founder dashboard should be designed around business questions. Examples include: Are we growing sustainably? Are customers staying? Are we generating enough cash? Is our sales pipeline healthy? Are customers reaching value quickly? The dashboard should then select metrics that answer those questions.",

              "A North Star Metric is a high-level measure that reflects the value customers receive from the product. It should not simply be a revenue number. For a marketplace, it might be successful transactions. For a collaboration platform, it might be active teams completing meaningful work. The metric should connect customer value and business growth.",

              "Leading indicators provide early signals. Examples include product activation, sales meetings booked, trial engagement, or onboarding completion. Lagging indicators show outcomes that occur later, such as revenue, churn, annual retention, or profit.",

              "A balanced dashboard combines both. If revenue is a lagging indicator, a founder should also monitor the behaviours that produce future revenue. This makes it possible to respond before the final outcome appears.",

              "Dashboards should include targets and trends, not isolated numbers. A conversion rate of 4% may be good or bad depending on the previous period, the target, customer segment, and acquisition channel.",

              "When a KPI suddenly changes, teams should investigate the root cause before making large decisions. The 5 Whys technique can help move from symptom to underlying process problem. For example: Why did sign-ups fall? Because landing-page conversion dropped. Why? Because mobile load time increased. Why? Because a large image was uploaded. Why? Because there is no automatic compression. Why? Because asset standards were never defined.",

              "The best dashboard is one that creates productive conversations and better decisions. If no one changes behaviour after reviewing it, it is probably not doing its job."
            ],
            keyPoints: [
              "Design dashboards around questions, not available data.",
              "Use a North Star Metric that reflects customer value.",
              "Combine leading and lagging indicators.",
              "Show targets, trends, and comparisons.",
              "Investigate root causes before reacting.",
              "A dashboard should influence action."
            ],
            quote:
              "A dashboard is not decoration. Its purpose is to help people notice, understand, and act.",
          },
        ],
      },
    ],
  },

  {
    id: "course-3",
    slug: "startup-fundamentals",
    title: "Startup Fundamentals",
    shortDescription:
      "Validate ideas, design effective MVPs, and understand Product-Market Fit.",
    description:
      "Learn how to move from an untested idea to validated learning. This course covers customer hypotheses, experimentation, the Build-Measure-Learn cycle, MVP design, pivot-or-persevere decisions, and the practical signals of Product-Market Fit.",
    duration: "2 hours",
    level: "Intermediate",
    category: "Venture Design & Validation",
    whatYouWillLearn: [
      "Understand Lean Startup principles",
      "Turn assumptions into testable hypotheses",
      "Use the Build-Measure-Learn feedback loop",
      "Design different forms of Minimum Viable Product",
      "Avoid overbuilding before validation",
      "Use evidence to decide whether to pivot or persevere",
      "Understand Product-Market Fit",
      "Recognise strong and weak PMF signals"
    ],
    modules: [
      {
        id: "lean-startup",
        title: "Lean Startup & Validation",
        description:
          "Learn how to reduce uncertainty through experiments, customer evidence, and disciplined learning.",
        lessons: [
          {
            id: "lean-methodology",
            slug: "lean-startup-methodology",
            title: "The Lean Startup Methodology",
            duration: "30 min",
            introduction:
              "A startup is an organisation operating under extreme uncertainty. The Lean Startup approach helps founders reduce that uncertainty by testing assumptions before investing heavily in scale.",
            content: [
              "Traditional business planning often assumes that the founder already understands the customer, the problem, the solution, the price, and the distribution model. Early-stage startups rarely have that certainty. Many of these ideas are assumptions that must be tested.",

              "The Lean Startup method encourages founders to convert assumptions into falsifiable hypotheses. Instead of saying, 'Small businesses need better reporting,' a stronger hypothesis would be, 'At least 30% of small retail businesses we interview will report spending more than three hours per week manually preparing sales reports and will agree to test an automated solution.' The second statement can be tested.",

              "The core cycle is Build, Measure, Learn. Build means creating the smallest experiment capable of testing the assumption. Measure means collecting evidence from actual behaviour. Learn means deciding what the evidence suggests about the original hypothesis.",

              "The word 'build' does not always mean writing software. A founder may test demand with interviews, a landing page, a manual service, a prototype, a spreadsheet, a mock-up, or a pre-order campaign. The objective is learning, not technical complexity.",

              "Measurement should focus on behavioural evidence. People may say they like an idea because they want to be polite. Stronger evidence includes paying, pre-ordering, signing a letter of intent, introducing the founder to a decision-maker, completing a trial, or repeatedly using the product.",

              "After learning, the founder decides whether to persevere, refine, or pivot. Persevering means the evidence is strong enough to continue the current direction. Refining means the core direction remains useful but needs improvement. Pivoting means a major assumption about customer, problem, product, channel, or business model should change.",

              "The purpose of Lean Startup is not to avoid vision. It is to separate vision from untested assumptions. Founders can remain ambitious while being disciplined about evidence."
            ],
            keyPoints: [
              "Early-stage startups operate with assumptions, not certainty.",
              "Turn important assumptions into testable hypotheses.",
              "Build the smallest experiment that can produce useful evidence.",
              "Prioritise behaviour over polite opinions.",
              "Use evidence to decide whether to persevere, refine, or pivot."
            ],
          },
          {
            id: "mvp",
            slug: "designing-an-mvp",
            title: "Designing a Minimum Viable Product",
            duration: "30 min",
            introduction:
              "An MVP is a learning vehicle. Its purpose is to test the riskiest assumption with the least unnecessary investment.",
            content: [
              "One of the most common startup mistakes is treating an MVP as a smaller version of the final product. A good MVP is defined by the question it is designed to answer. Different questions require different MVPs.",

              "A Concierge MVP delivers the service manually. For example, before building an automated meal-planning platform, a founder may manually create weekly meal plans for ten customers. This reveals what customers actually request, what they value, and where the process becomes difficult.",

              "A Wizard of Oz MVP presents an automated-looking experience while humans perform some processes behind the scenes. This can help test demand for a complex service before investing in full automation.",

              "A Smoke Test evaluates demand before the product exists. A founder may create a landing page explaining the offer and ask visitors to join a waitlist, book a consultation, or place a refundable deposit. The strength of the commitment determines the strength of the evidence.",

              "Prototype MVPs are useful when usability or workflow is the main uncertainty. Interactive designs created with tools such as Figma can allow users to experience the concept before engineering begins.",

              "The best MVP targets the riskiest assumption first. If the greatest uncertainty is whether anyone wants the product, building advanced technology is premature. If demand is already proven but usability is uncertain, a prototype may be appropriate.",

              "Founders should define success and failure criteria before running the experiment. Without clear criteria, teams may reinterpret weak results to protect their original idea."
            ],
            keyPoints: [
              "An MVP is designed around a learning objective.",
              "Use Concierge MVPs to learn manually before automating.",
              "Use Wizard of Oz MVPs when automation is expensive or complex.",
              "Use Smoke Tests to test demand before building.",
              "Test the riskiest assumption first.",
              "Define success criteria before launching the experiment."
            ],
          },
          {
            id: "product-market-fit",
            slug: "understanding-product-market-fit",
            title: "Understanding Product-Market Fit",
            duration: "30 min",
            introduction:
              "Product-Market Fit describes a situation where a product satisfies a meaningful market need strongly enough that customers repeatedly choose, use, and recommend it.",
            content: [
              "Product-Market Fit is not the same as having customers. Early customers may buy because of personal relationships, heavy discounts, curiosity, or aggressive sales. PMF becomes stronger when demand is repeatable and customers continue receiving value.",

              "Common signals include strong retention, repeated usage, organic referrals, customers actively complaining when the product is unavailable, increasing expansion revenue, shorter sales cycles, and users describing the product as difficult to replace.",

              "Retention is especially important because it shows whether the product continues solving the problem after the excitement of acquisition disappears. A business that grows through advertising but rapidly loses customers may have strong promotion but weak product-market fit.",

              "The Sean Ellis test is one popular qualitative method. Active users are asked how they would feel if they could no longer use the product. A high percentage selecting 'very disappointed' can be an encouraging signal, although founders should combine surveys with behavioural data.",

              "PMF can exist strongly within one customer segment and weakly within another. Founders should therefore analyse retention and satisfaction by segment rather than assuming the entire market behaves the same way.",

              "Before strong PMF, the main objective is learning and product improvement. After stronger PMF, the company can invest more aggressively in acquisition, team growth, automation, and operational scale.",

              "Product-Market Fit is not permanent. Competitors, technology, customer expectations, regulation, and market conditions can change. Even successful companies must continue listening to customers and improving."
            ],
            keyPoints: [
              "Having customers does not automatically mean Product-Market Fit.",
              "Retention is one of the strongest PMF signals.",
              "Organic referrals and repeat usage indicate strong customer value.",
              "Measure PMF by customer segment.",
              "Combine survey responses with behavioural evidence.",
              "PMF can weaken over time if the market changes."
            ],
          },
        ],
      },
    ],
  },

  {
    id: "course-4",
    slug: "entrepreneurship-mindset",
    title: "Entrepreneurship Mindset",
    shortDescription:
      "Build the resilience and risk-management mindset required for entrepreneurship.",
    description:
      "Develop the psychological resilience, self-awareness, and disciplined risk-management habits needed to build under uncertainty. Learn how to interpret rejection, manage controllable factors, make difficult decisions, and anticipate failure before it happens.",
    duration: "2 hours",
    level: "Intermediate",
    category: "Strategic Leadership",
    whatYouWillLearn: [
      "Develop founder resilience",
      "Understand internal and external locus of control",
      "Separate personal identity from business outcomes",
      "Reframe rejection as useful feedback",
      "Understand market, execution, and financial risk",
      "Apply downside-protection thinking",
      "Use pre-mortem analysis",
      "Make more rational decisions under uncertainty"
    ],
    modules: [
      {
        id: "founder-mindset",
        title: "Founder Psychology & Risk",
        description:
          "Learn how strong founders manage uncertainty, interpret setbacks, and protect the business from avoidable risk.",
        lessons: [
          {
            id: "founder-psychology",
            slug: "psychology-of-a-high-performance-founder",
            title: "The Psychology of a High-Performance Founder",
            duration: "30 min",
            introduction:
              "Entrepreneurship places unusual pressure on decision-making. Founders often operate with limited information, limited resources, and high emotional attachment to the outcome.",
            content: [
              "A high-performance founder develops an internal locus of control. This does not mean believing that everything is controllable. Economic conditions, competitors, regulation, and unexpected events may be outside the founder's influence. The principle is to focus attention on the response rather than wasting energy on blame.",

              "For example, a founder cannot control a sudden change in an advertising platform's algorithm. They can control whether the business depends entirely on that platform, whether customer emails are collected, whether alternative channels are tested, and how quickly the team adapts.",

              "Resilience should not be confused with blindly continuing a failing strategy. True resilience includes the ability to change direction without losing commitment to the broader mission. Stubbornness protects the original plan; resilience protects the objective.",

              "Founders should also separate self-worth from business performance. A failed product launch does not automatically make the founder a failure. When identity becomes completely attached to the business, objective decision-making becomes harder because changing strategy feels like admitting personal defeat.",

              "Decision hygiene can improve founder performance. This includes documenting major assumptions, defining decision criteria, seeking disconfirming evidence, sleeping before irreversible decisions when possible, and reviewing past decisions based on the information available at the time rather than only the final outcome.",

              "A founder's environment also matters. Sleep, physical health, trusted relationships, mentors, and time away from constant urgency can affect decision quality. Sustainable performance is more valuable than short periods of extreme intensity followed by burnout."
            ],
            keyPoints: [
              "Focus on controllable responses rather than uncontrollable events.",
              "Resilience includes changing strategy when evidence requires it.",
              "Do not attach personal identity entirely to business outcomes.",
              "Improve decision quality through deliberate processes.",
              "Sustainable founder performance requires personal capacity management."
            ],
          },
          {
            id: "reframing-rejection",
            slug: "reframing-rejection",
            title: "Reframing Rejection",
            duration: "20 min",
            introduction:
              "Rejection is common in entrepreneurship. Customers say no, investors decline, partnerships fail, applications are rejected, and talented candidates choose other companies.",
            content: [
              "The most useful response to rejection is curiosity. Instead of asking only, 'Why did they reject me?' ask, 'What information does this reveal?' The answer may involve the offer, timing, trust, pricing, customer fit, communication, or simply factors outside your control.",

              "Not all rejection is useful feedback. One person's opinion should not automatically change the business. Founders should look for patterns across multiple conversations and compare stated feedback with behaviour.",

              "Sales rejection may reveal weak qualification. If many prospects say the product is too expensive, the issue may be price, but it may also be that the team is speaking to customers who do not experience the problem strongly enough.",

              "Investor rejection may reveal concerns about market size, traction, team capability, defensibility, or business model. Even when the founder disagrees, repeated objections can highlight areas that require clearer evidence.",

              "A healthy founder creates emotional distance between the event and the analysis. Feel the disappointment, then review the information. The goal is to preserve confidence without becoming resistant to reality."
            ],
            keyPoints: [
              "Treat rejection as a source of information, not a definition of self-worth.",
              "Look for patterns rather than reacting to one opinion.",
              "Distinguish between poor customer fit and poor product value.",
              "Use repeated objections to improve evidence and communication.",
              "Confidence and openness to feedback can coexist."
            ],
          },
          {
            id: "risk-mitigation",
            slug: "risk-mitigation",
            title: "Risk Mitigation vs Blind Risk-Taking",
            duration: "25 min",
            introduction:
              "Entrepreneurship involves risk, but successful founders are not rewarded for taking unnecessary risk. They are rewarded for identifying uncertainty and managing downside intelligently.",
            content: [
              "Market risk is the risk that customers do not want the product strongly enough to pay for it. This can be reduced through interviews, pre-orders, pilots, letters of intent, waitlists, and other validation before heavy investment.",

              "Execution risk is the risk that the team cannot deliver the solution effectively. It may come from unrealistic scope, weak skills, poor coordination, technical complexity, or dependence on one critical person. Reducing execution risk often means simplifying the first version, clarifying ownership, and testing difficult components early.",

              "Financial risk is the risk of running out of cash before the business becomes sustainable or raises additional funding. Founders should monitor burn rate, runway, committed expenses, debt obligations, and the timing of receivables.",

              "Concentration risk occurs when too much of the business depends on one customer, supplier, employee, platform, or revenue stream. A company may appear successful while remaining fragile if one relationship accounts for most revenue.",

              "Legal and regulatory risk should also be considered when relevant. Contracts, data protection, employment obligations, intellectual property, licensing, and industry regulations can create significant consequences when ignored.",

              "Good risk management asks two questions: What is the probability of this problem occurring, and what is the impact if it does? High-probability, high-impact risks deserve immediate attention. Low-probability but catastrophic risks may also require safeguards.",

              "The objective is not to eliminate every risk. Doing so would eliminate innovation. The objective is to understand which risks are necessary and which are avoidable."
            ],
            keyPoints: [
              "Market risk concerns demand.",
              "Execution risk concerns delivery capability.",
              "Financial risk concerns cash survival.",
              "Concentration risk makes apparently healthy businesses fragile.",
              "Evaluate both probability and impact.",
              "Protect the downside without eliminating all upside."
            ],
          },
          {
            id: "pre-mortem",
            slug: "pre-mortem-analysis",
            title: "The Pre-Mortem Protocol",
            duration: "20 min",
            introduction:
              "A pre-mortem is a structured exercise that assumes a future project has already failed and asks the team to identify the reasons why.",
            content: [
              "Teams often struggle to identify risk before launch because optimism and social pressure encourage agreement. A pre-mortem changes the frame. Instead of asking, 'Could this fail?' the team assumes failure has already happened.",

              "For example, imagine launching a new mobile app. The team imagines it is twelve months later and the launch failed completely. Possible reasons may include weak onboarding, poor retention, high acquisition cost, technical instability, unclear positioning, lack of cash, or slow customer support.",

              "The team then ranks these failure causes by probability and impact. High-priority risks become mitigation tasks with owners and deadlines.",

              "A strong pre-mortem should include people from different functions because engineering, sales, marketing, finance, and operations may identify different risks.",

              "The exercise should be repeated before major launches, partnerships, hiring waves, fundraising plans, or strategic investments. It is most valuable before commitments become difficult to reverse."
            ],
            keyPoints: [
              "Assume failure has already happened.",
              "Identify specific causes rather than vague fears.",
              "Rank risks by probability and impact.",
              "Assign mitigation actions and owners.",
              "Repeat pre-mortems before major irreversible commitments."
            ],
          },
        ],
      },
    ],
  },

  {
    id: "course-5",
    slug: "financial-literacy-for-founders",
    title: "Financial Literacy for Founders",
    shortDescription:
      "Understand the numbers that determine whether your business can survive and grow.",
    description:
      "Learn the practical financial concepts founders need to make better decisions, including unit economics, contribution margin, cash flow, burn rate, runway, pricing, and working capital.",
    duration: "2 hours",
    level: "Beginner",
    category: "Corporate Finance Strategy",
    whatYouWillLearn: [
      "Understand unit economics",
      "Calculate Average Order Value",
      "Understand Cost of Goods Sold",
      "Calculate contribution margin and contribution margin percentage",
      "Distinguish revenue, profit, and cash flow",
      "Calculate burn rate and runway",
      "Understand working capital",
      "Use financial metrics to guide growth decisions"
    ],
    modules: [
      {
        id: "founder-finance",
        title: "Founder Finance Fundamentals",
        description:
          "Learn how to interpret the economics and cash position of a growing business.",
        lessons: [
          {
            id: "unit-economics",
            slug: "understanding-unit-economics",
            title: "Understanding Unit Economics",
            duration: "30 min",
            introduction:
              "Unit economics examines the financial performance of one unit of business activity, such as one customer, one order, one subscription, or one transaction.",
            content: [
              "Revenue growth can hide a weak business model. A company may sell more every month while losing money on every transaction. Unit economics helps founders understand whether growth improves or worsens the financial position.",

              "Average Order Value, or AOV, measures the average amount spent in one transaction. Increasing AOV through bundles, upgrades, or complementary products can improve revenue without acquiring additional customers.",

              "Cost of Goods Sold, or COGS, includes costs that increase directly as sales increase. For a physical product, this may include materials, manufacturing, packaging, and fulfilment. For software, it may include hosting, usage-based infrastructure, payment processing, or third-party services directly connected to serving users.",

              "Gross profit is revenue minus COGS. Gross margin percentage shows gross profit as a proportion of revenue. Businesses with very different revenue can have very different margin quality.",

              "Founders should understand unit economics by customer segment when possible. One customer type may generate high revenue but require expensive support, while another may generate less revenue but produce much stronger margins.",

              "Unit economics should also consider acquisition and retention. A customer may produce a healthy contribution margin on each order but still be unprofitable if acquisition cost is extremely high and repeat purchase is weak.",

              "The goal is to understand the economic engine: how much value comes in, what direct costs go out, how much remains, how long customers stay, and how much it costs to acquire them."
            ],
            keyPoints: [
              "Revenue growth does not guarantee profitability.",
              "Define the unit that best represents your business model.",
              "Track AOV, COGS, gross profit, and gross margin.",
              "Analyse economics by customer segment when possible.",
              "Connect unit economics with CAC and retention."
            ],
          },
          {
            id: "contribution-margin",
            slug: "contribution-margin",
            title: "Understanding Contribution Margin",
            duration: "25 min",
            introduction:
              "Contribution margin shows how much revenue remains after variable costs and therefore how much is available to cover fixed costs and profit.",
            content: [
              "Suppose a product sells for £100 and variable costs are £40. The contribution margin is £60. That £60 contributes toward rent, salaries, software subscriptions, administration, and eventually profit.",

              "Contribution margin percentage is useful for comparing products with different prices. In this example, the contribution margin percentage is 60%.",

              "A negative contribution margin means the business loses more money every time it sells. Scaling such a business accelerates losses unless the economics change.",

              "Founders can improve contribution margin by increasing price, reducing variable costs, improving operational efficiency, changing product mix, negotiating better supplier terms, or increasing high-margin add-ons.",

              "Discounting should be evaluated carefully. A 10% price discount does not necessarily reduce profit by only 10%. If margins are already thin, a modest discount can remove a large portion of contribution margin.",

              "Contribution margin is especially useful for break-even analysis. If a company knows its total fixed costs and contribution per unit, it can estimate how many units must be sold to cover fixed expenses."
            ],
            formula: {
              title: "Contribution Margin",
              formula:
                "Contribution Margin = Selling Price − Variable Cost\nContribution Margin % = Contribution Margin ÷ Selling Price × 100",
              description:
                "Use contribution margin to understand how each sale contributes toward fixed costs and eventual profit."
            },
            keyPoints: [
              "Contribution margin is different from revenue.",
              "Negative contribution margin becomes more dangerous as sales scale.",
              "Discounts can reduce profitability more than expected.",
              "Contribution margin supports pricing and break-even decisions.",
              "Improve margins through pricing, efficiency, supplier terms, and product mix."
            ],
          },
          {
            id: "cash-flow",
            slug: "cash-flow-burn-rate-and-runway",
            title: "Cash Flow, Burn Rate and Runway",
            duration: "30 min",
            introduction:
              "A profitable business can still fail if cash is not available when payments are due. Cash flow therefore deserves constant attention.",
            content: [
              "Revenue is recorded when a business earns money, but cash flow depends on when money actually enters or leaves the bank account. A company may invoice a customer today and receive payment sixty days later. During those sixty days, salaries and suppliers may still need to be paid.",

              "Burn rate measures how quickly a business is consuming available cash. Gross burn usually refers to total monthly operating expenses. Net burn considers cash inflows and outflows and therefore shows how much cash the company is actually losing each month.",

              "Runway estimates how long the company can continue operating at the current net burn rate. If a company has £120,000 in cash and loses £20,000 per month, it has approximately six months of runway.",

              "Runway is not a guarantee because expenses and revenue can change. It should be updated regularly and modelled under multiple scenarios, such as expected, optimistic, and downside cases.",

              "Working capital represents short-term operating liquidity. Businesses can improve working capital by collecting customer payments faster, requesting deposits, reducing unnecessary inventory, negotiating longer supplier payment terms, or improving billing processes.",

              "Founders should begin fundraising or cost-reduction decisions before cash becomes critically low. A business with only a few weeks of runway has less negotiating power and fewer strategic options.",

              "Cash forecasting should include known commitments, expected collections, payroll, taxes, debt payments, supplier obligations, and major planned expenses. The goal is to see problems early enough to act."
            ],
            formula: {
              title: "Core Cash Metrics",
              formula:
                "Net Burn = Monthly Cash Outflows − Monthly Cash Inflows\nRunway = Available Cash ÷ Monthly Net Burn\nWorking Capital = Current Assets − Current Liabilities",
              description:
                "Recalculate these metrics regularly because cash positions and expenses change."
            },
            keyPoints: [
              "Profit and cash are not the same thing.",
              "Monitor both gross burn and net burn.",
              "Runway should be updated regularly.",
              "Use scenario planning rather than relying on one forecast.",
              "Improve working capital by managing payment timing.",
              "Act before runway becomes dangerously short."
            ],
          },
        ],
      },
    ],
  },

  {
    id: "course-6",
    slug: "product-sales-and-brand-development",
    title: "Product Sales & Brand Development",
    shortDescription:
      "Build a strong brand position and turn customer interest into revenue.",
    description:
      "Learn how to create a differentiated market position, communicate a compelling value proposition, build trust, structure a sales pipeline, qualify opportunities, and handle customer objections professionally.",
    duration: "2 hours",
    level: "Intermediate",
    category: "Commercial Go-to-Market Execution",
    whatYouWillLearn: [
      "Understand strategic brand positioning",
      "Define a clear customer and category",
      "Create a strong value proposition",
      "Differentiate from competitors",
      "Build a trust engine using evidence",
      "Understand sales pipeline stages",
      "Improve lead qualification",
      "Handle objections using the LAER framework"
    ],
    modules: [
      {
        id: "brand-and-sales",
        title: "Brand Positioning & Sales",
        description:
          "Learn how to create a clear market position and convert qualified customer interest into revenue.",
        lessons: [
          {
            id: "brand-positioning",
            slug: "strategic-brand-positioning",
            title: "Strategic Brand Positioning",
            duration: "30 min",
            introduction:
              "Brand positioning is the place your product occupies in the mind of the customer relative to available alternatives.",
            content: [
              "Branding is not limited to logos, colours, typography, or social-media aesthetics. Those elements express the brand, but positioning defines what the business should be known for.",

              "Strong positioning begins with a specific target customer. A product designed for everyone usually communicates weakly to everyone. The founder should understand the customer's context, problem, alternatives, priorities, and decision criteria.",

              "The next question is category. Customers need a mental frame for understanding what the product is. A company may position itself as accounting software, a financial operating system, a marketplace, a premium advisory service, or another recognised category.",

              "Differentiation explains why the customer should choose this product instead of doing nothing or choosing an alternative. Useful differentiation can come from speed, expertise, specialisation, convenience, technology, service model, distribution, price structure, proprietary data, network effects, or customer experience.",

              "A strong value proposition connects the customer problem to a meaningful outcome. It should explain who the product is for, what problem it solves, what result it creates, and why the approach is different.",

              "Trust is essential because customers rarely purchase based on claims alone. A trust engine may include testimonials, case studies, customer logos, certifications, product reviews, guarantees, transparent processes, measurable results, expert content, and demonstrations.",

              "Positioning should remain consistent across the website, sales pitch, product description, advertising, onboarding, and customer experience. When every channel communicates a different story, the market becomes confused."
            ],
            formula: {
              title: "Brand Positioning Framework",
              formula:
                "For [Target Customer] who struggles with [Core Problem], our product is a [Category] that delivers [Primary Benefit]. Unlike [Alternative], we provide [Key Differentiating Value].",
              description:
                "Use this as a starting point, then refine the language until it sounds natural and specific to your market."
            },
            keyPoints: [
              "Brand positioning is strategic, not merely visual.",
              "Choose a specific target customer.",
              "Define the category customers should associate with the product.",
              "Differentiate on meaningful customer value.",
              "Support claims with evidence and trust signals.",
              "Keep positioning consistent across customer touchpoints."
            ],
          },
          {
            id: "sales-pipeline",
            slug: "building-a-sales-pipeline",
            title: "Building a High-Velocity Sales Pipeline",
            duration: "30 min",
            introduction:
              "A sales pipeline is a structured representation of how a potential customer moves from initial interest to a completed purchase.",
            content: [
              "Without clear sales stages, teams often confuse activity with progress. A salesperson may have many conversations but very few qualified opportunities. Pipeline stages create a shared definition of where each opportunity stands.",

              "The first stage is usually qualification. The team determines whether the prospect has a real problem, sufficient urgency, access to budget, decision authority, and a reasonable fit with the product.",

              "The next stage may involve discovery. The objective is to understand the customer's current process, desired outcome, challenges, impact of the problem, previous attempts, decision process, and timing.",

              "A demonstration or solution presentation should connect directly to the needs discovered earlier. Generic feature tours are less effective than showing how specific capabilities solve the prospect's stated problems.",

              "The proposal stage should clearly describe scope, expected outcomes, price, responsibilities, implementation, timeline, and next steps. Ambiguous proposals often create unnecessary delays.",

              "A healthy pipeline requires exit criteria. A lead should not move to the next stage simply because a meeting happened. It should move only when the agreed condition for that stage has been met.",

              "Pipeline metrics can include lead-to-opportunity conversion, opportunity-to-win rate, average sales cycle, average deal value, stage conversion, pipeline coverage, and reasons for lost deals.",

              "Sales forecasting improves when the team uses evidence rather than optimism. Opportunities should be weighted according to actual stage, customer commitment, and historical conversion rates."
            ],
            keyPoints: [
              "Define clear pipeline stages.",
              "Use qualification to avoid wasting time on poor-fit prospects.",
              "Discovery should come before presenting the solution.",
              "Demonstrations should connect features to customer problems.",
              "Use exit criteria for every stage.",
              "Track conversion rates and reasons for lost deals."
            ],
          },
          {
            id: "laer-framework",
            slug: "laer-objection-handling",
            title: "The LAER Method for Objection Handling",
            duration: "25 min",
            introduction:
              "Objections are not interruptions to the sales process. They are signals that the customer still has uncertainty, unanswered questions, or perceived risk.",
            content: [
              "The LAER framework stands for Listen, Acknowledge, Explore, and Respond. It encourages salespeople to understand the objection before attempting to overcome it.",

              "Listen means allowing the customer to explain the concern fully without interrupting. Salespeople often hear the first sentence and immediately begin defending the product. This can cause them to respond to the wrong problem.",

              "Acknowledge means showing that the concern has been heard and is reasonable. Acknowledging is not the same as agreeing. A response such as, 'I understand why implementation time is important for your team,' demonstrates attention without making a commitment.",

              "Explore means asking questions to uncover the real issue. A customer who says, 'The price is too high,' may actually mean they do not understand the value, they lack budget authority, they are comparing the product with a cheaper alternative, or they are worried about implementation risk.",

              "Respond only after the concern is understood. The response may include data, a case study, a product demonstration, a different implementation plan, a guarantee, a smaller starting scope, or a clearer explanation of return on investment.",

              "Strong objection handling does not pressure every customer into buying. Sometimes the correct conclusion is that the customer is not a good fit. Ethical sales protects long-term trust and reduces future churn.",

              "Teams should document recurring objections because they provide valuable information for marketing, product, pricing, onboarding, and positioning."
            ],
            keyPoints: [
              "Listen before defending.",
              "Acknowledge the concern without automatically agreeing.",
              "Explore the reason behind the objection.",
              "Respond with relevant evidence or a practical solution.",
              "Not every prospect should become a customer.",
              "Repeated objections should inform product and marketing decisions."
            ],
          },
        ],
      },
    ],
  },
];

export function getBusinessCourseBySlug(courseSlug?: string) {
  if (!courseSlug) {
    return undefined;
  }

  return businessCourses.find(
    (course) => course.slug === courseSlug,
  );
}

export function getBusinessLessonBySlug(
  course: BusinessCourse,
  lessonSlug?: string,
) {
  if (!lessonSlug) {
    return undefined;
  }

  for (const module of course.modules) {
    const lesson = module.lessons.find(
      (item) => item.slug === lessonSlug,
    );

    if (lesson) {
      return {
        lesson,
        module,
      };
    }
  }

  return undefined;
}

export function getAllBusinessCourseLessons(
  course: BusinessCourse,
) {
  return course.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title,
    })),
  );
}