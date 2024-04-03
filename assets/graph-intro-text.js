export const GraphIntroText = [
  //CEO
  {
    id: "CEO",
    data: [
      "CEOs attended by far the best universities of any executive. Nearly one in three attended an Ivy League university, and a fair share attended (and often, dropped out of) other top universities like Stanford and MIT. Their paths were often one of two: leave a top college early or stay in school for a more senior technical degree (PhD, MS) to get domain mastery over their field. They tended to major in the sciences, with a good many focusing on computer science.",
      "CEOs were the least likely of the group to leave their first job immediately - typically because it was either a company that they founded or an opportunity to develop meaningful skills before they did start one. They were often promoted very quickly, and took on management responsibilities earlier on in their career than any of their compatriots.",
      "Contrary to popular belief, CEOs had spent a good amount of time preparing before launching their company. Many of them had worked for a long time building up the engineering and product skills that would empower them to lead their organizations - others spent most of their time learning through experience, founding and exiting prior companies. Either way, they arrived at their unicorn company in their early 30s, after a healthy amount of learned experience.",
      "Software unicorn founders do not tend to be veterans. While they often have had plenty of prior work expeirence, most hit the mark on either their first or their second venture. It is rare for founders to hit it on their third try, much less their fourth. That said, many take a bit of time before taking the plunge: while there are quite a few CEOs who get to this stage right after graduating, nearly two thirds take six or more years to crystallize their ideas.",
    ],
    GraphData: {
      EduUnderGrad: {
        labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
        datasets: [
          {
            label: "Undergrad Institution",
            data: [32, 32, 16, 19],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      EduHighSchool: {
        labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
        datasets: [
          {
            label: "Highest Schooling Level",
            data: [51, 15, 17, 17],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      FirstJobFunction: {
        labels: ["Revenue", "Product", "Other", "Finance", "Engineering"],
        datasets: [
          {
            label: "Function",
            data: [23.4, 4.3, 29.8, 6.4, 36.2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      YearsInJob: {
        labels: ["<1", "1-2", "3+"],
        datasets: [
          {
            label: "Years In Job?",
            data: [10.8, 56.8, 32.4],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      MidCareerPreUnicorn: {
        labels: ["0", "1", "2", "3", "4+"],
        datasets: [
          {
            label: "# of Jobs Pre-Unicorn",
            data: [17, 10.6, 8.5, 10.6, 53.2],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      MidCareerFunction: {
        labels: ["Revenue", "Product", "Engineering", "Other", "Finance"],
        datasets: [
          {
            label: "Most Common Function",
            data: [23.4, 10.6, 21.3, 44.7, 0.0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      PriorCompaniesFounded: {
        labels: ["0", "1", "2", "3+"],
        datasets: [
          {
            label: "Prior Companies Founded",
            data: [47.2, 36.1, 13.9, 2.8],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      YearsPostCollege: {
        labels: ["0-5", "6-10", "11+"],
        datasets: [
          {
            label: "Years Post-College",
            data: [36.8, 26.3, 36.8],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  },
  //CRO
  {
    id: "CRO",
    data: [
      "Chief Revenue Officers typically did the least education of any senior executive. None of them got PhDs, and few did much beyond their undergrad and possibly an MBA. Their undergraduate degrees focused on the social sciences and pre-business majors, and they were more likely than other executives to attend an undergraduate business school. They were also the least likely to attend a high-ranking university.",
      "Sales leaders tend to have a more linear progression up the ladder than other careers - many started at the bottom rung of sales organizations and worked their way up over multiple organizations. Those who were in their first job for 2 or less years were often promoted to advanced levels, going from doing SDR work to getting in front of clients and beginning to sell. Those who didn't do revenue roles were often in consultant / investment banking programs out of college. It was rare to see them take other corporate jobs.",
      "Sales leaders rarely started their careers at the companies that they led - many bounced around from spot to spot before landing at the unicorn. It was common to see folks with five to seven stints before they end at the company they led, often joining in a later stage of the journey. With only a few exceptions, that promotion came after a long career leading revenue functions (often with some full P&L responsibility in a GM / Division Head role).",
      "Just about one in 10 Chief Revenue Officers were there from the beginning. The vast majority were acquired by the company after it had acquired product-market fit and were scaling out operations. Like Chief Financial Officers, CROs are often the most senior executives at the company and brought in to help mature / develop the team at a later stage. They were always brought in at the most senior level, often lateralling from a role that was a step or two below that (e.g. VP, Sales or SVP, Marketing).",
    ],
    GraphData: {
      EduUnderGrad: {
        labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
        datasets: [
          {
            label: "Undergrad Institution",
            data: [0, 58, 27, 17],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      EduHighSchool: {
        labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
        datasets: [
          {
            label: "Highest Schooling Level",
            data: [53, 16, 32, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      FirstJobFunction: {
        labels: ["Revenue", "Product", "Other", "Finance", "Engineering"],
        datasets: [
          {
            label: "Function",
            data: [57.9, 5.3, 31.6, 0, 5.3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      YearsInJob: {
        labels: ["<1", "1-2", "3+"],
        datasets: [
          {
            label: "Years In Job?",
            data: [30, 20, 55.6],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      MidCareerPreUnicorn: {
        labels: ["0", "1", "2", "3", "4+"],
        datasets: [
          {
            label: "# of Jobs Pre-Unicorn",
            data: [10.5, 5.3, 15.8, 5.3, 63.2],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      MidCareerFunction: {
        labels: ["Revenue", "Product", "Engineering", "Other", "Finance"],
        datasets: [
          {
            label: "Most Common Function",
            data: [78.9, 0, 0, 5.3, 15.8],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      PriorCompaniesFounded: {
        labels: ["Founder", "Series A/B", "Series C/D", "Series E+"],
        datasets: [
          {
            label: "Prior Companies Founded",
            data: [11.8, 11.8, 35.3, 41.2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      YearsPostCollege: {
        labels: ["CXO", "Founder", "VP / Manager"],
        datasets: [
          {
            label: "Years Post-College",
            data: [36.8, 26.3, 36.8],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  },
  //COO
  {
    id: "COO",
    data: [
      "COOs had an interesting profile - like CFOs, many graduated from non-name brand US colleges but did their postgraduate years at top business schools. A healthy proportion (1 in 3) studied outside the U.S. for their undergrad degree, although this was far less common for their graduate degrees. They were among the youngest of the group, ahead of only CEOs when looking at the average time they had spent in the workforce.",
      "While most COOs eventually moved towards the Revenue side of the business, they often start in different parts of the organization. It was common for COOs in software businesses to have spent some time learning the ropes of product or engineering, and even more common for them to have intro roles at consulting / finance firms to learn general operation skills and business strategy before they jump into the corporate ladder.",
      "COOs are often substitutes for CROs in organizations that do not want to have both roles. Their background is occasionally on the consulting / operations / strategic finance side, but more often it is the result of growing up through a revenue organization. If a COO was not a founder, they had to have some seasoning at 3-4 other companies before they could get hired (typically in a laterla promotion).",
      "The COO title appears to be one often given to one of business-minded co-founders or early hires. Compared to other roles, it was relatively less likely to be hired at a later stage, and there were a healthy amount of founders who had taken on the role. The COO is effectively the leader of the business organization in most places that it is brought in. The external hires were brought in after product-market fit were clear and at the most senior level.",
    ],
    GraphData: {
      EduUnderGrad: {
        labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
        datasets: [
          {
            label: "Undergrad Institution",
            data: [16.7, 5.6, 44.4, 33.3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      EduHighSchool: {
        labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
        datasets: [
          {
            label: "Highest Schooling Level",
            data: [40.9, 13.6, 40.9, 4.5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      FirstJobFunction: {
        labels: ["Revenue", "Product", "Other", "Finance", "Engineering"],
        datasets: [
          {
            label: "Function",
            data: [18.2, 4.5, 31.8, 31.8, 13.6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      YearsInJob: {
        labels: ["<1", "1-2", "3+"],
        datasets: [
          {
            label: "Years In Job?",
            data: [17.6, 41.2, 41.2],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      MidCareerPreUnicorn: {
        labels: ["0", "1", "2", "3", "4+"],
        datasets: [
          {
            label: "# of Jobs Pre-Unicorn",
            data: [31.8, 4.5, 9.1, 22.7, 31.8],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      MidCareerFunction: {
        labels: ["Revenue", "Product", "Engineering", "Other", "Finance"],
        datasets: [
          {
            label: "Most Common Function",
            data: [45.5, 0, 9.1, 4.5, 40.9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      PriorCompaniesFounded: {
        labels: ["Founder", "Series A/B", "Series C/D", "Series E+"],
        datasets: [
          {
            label: "Prior Companies Founded",
            data: [47.6, 9.5, 14.3, 28.6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      YearsPostCollege: {
        labels: ["CXO", "Founder", "VP / Manager"],
        datasets: [
          {
            label: "Years Post-College",
            data: [47.8, 47.6, 4.5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  },
  //CTO
  {
    id: "CTO",
    data: [
      "If you want to hire a high-quality CTO, look outside the United States! Nearly six in 10 of the CTOs did their undergrad outside the States, with most coming from India, Israel, China, and Eastern Europe. Those in the U.S. tended to attend high-end colleges with a focus on top engineering programs (Carnegie Mellon, MIT, UC-Berkeley) over the name-brand Ivy Leagues. They did more school than any other group, with nearly 4 in 10 doing either a postgraduate MS or PhD in the sciences.",
      "CTOs tend to work in engineering alone for their entire careers before founding companies. The 'Other' category here includes a lot of faculty academic positions for the CTOs who spent time in university before moving on to the corporate world. Of those who immediately went from their education to the workforce, almost all began as software engineers and rose through the organization for a couple years before moving on.",
      "CTOs rarely worked in any function but engineering. Their career paths were bimodal: many started with the company as the first technology hire and rode it out (especially in the case of a non-technical CEO/founder), but others bounced around before being hired later on in the process. For those who got hired later, they had often done stints at multiple other software companies in engineering roles and before that, had often been researchers at universities.",
      "CTOs are the more veteran members of the founding team. While it is common for CEOs to come in without much experience, CTOs often have a couple jobs under their belt before they are ready to take on the risk of founding. The founding CTO will often lead the company through the development of the first piece of software and product-market fit iterating, making it relatively rare to see Series A/B CTOs being brought in. After that, it is much more common.",
    ],
    GraphData: {
      EduUnderGrad: {
        labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
        datasets: [
          {
            label: "Undergrad Institution",
            data: [7.4, 22.2, 11.1, 59.3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      EduHighSchool: {
        labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
        datasets: [
          {
            label: "Highest Schooling Level",
            data: [47.2, 27.8, 13.9, 11.1],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      FirstJobFunction: {
        labels: ["Revenue", "Product", "Other", "Finance", "Engineering"],
        datasets: [
          {
            label: "Function",
            data: [5.6, 2.8, 19.4, 0, 72.2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      YearsInJob: {
        labels: ["<1", "1-2", "3+"],
        datasets: [
          {
            label: "Years In Job?",
            data: [26.9, 30.8, 42.3],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      MidCareerPreUnicorn: {
        labels: ["0", "1", "2", "3", "4+"],
        datasets: [
          {
            label: "# of Jobs Pre-Unicorn",
            data: [19.4, 0, 11.1, 5.6, 63.9],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      MidCareerFunction: {
        labels: ["Revenue", "Product", "Engineering", "Other", "Finance"],
        datasets: [
          {
            label: "Most Common Function",
            data: [2.8, 2.8, 0, 83.3, , 11.1],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      PriorCompaniesFounded: {
        labels: ["Founder", "Series A/B", "Series C/D", "Series E+"],
        datasets: [
          {
            label: "Prior Companies Founded",
            data: [45.5, 12.1, 21.2, 21.2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      YearsPostCollege: {
        labels: ["CXO", "Founder", "VP / Manager"],
        datasets: [
          {
            label: "Years Post-College",
            data: [54.5, 45.5, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  },
  //CPO
  {
    id: "CPO",
    data: [
      "Chief Product Officers have a very similar, but less extreme education profile as the CFOs. They are not disproportionately likely to attend high-ranked undergraduate universities (like CEOs), but did a lot of undergraduate business programs and then went back to get their MBAs after they graduate. They did not enroll in long postgraduate programs like JDs and PhDs, and generally spent very little time out of the workforce after graduating. Over one in three did their undergrad studies outside the US, making it one of the most international cohorts.",
      "Since Product is so interdisciplinary, CPOs tend to begin their career across a range of different functions. They are occasionally founding companies themselves, but more often they are learning engineering or business skills working at Big Tech or at a large professional services company. It's not long before they leave that initial job to try their hand in a more operationally focused one: the average first job for CPOs lasted under 1.5 years.",
      "Since CPOs tend to be hired quite late in a company's lifecycle, Product leads have quite a bit of experience before they are hired to work at unicorns. They have often seen a half-dozen companies at this stage, and developed a range of related industry products. Most come through the Product ranks, but since the role draws on both business and engineering related skills, it is common for them to specialize in either area before making the Product switch.",
      "At most young technology organizations, the Chief Product Officer role is informally filled by the CEO, whose main initial job is to steer the company to product-market fit by staying closely in touch with both engineering and customers. A Product function is rarely built before the company gets to the scaling phase in its Series C stage, and the position is rarely settled until the organization has gotten a lot of maturity.",
    ],
    GraphData: {
      EduUnderGrad: {
        labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
        datasets: [
          {
            label: "Undergrad Institution",
            data: [14.3, 35.7, 14.3, 35.7],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      EduHighSchool: {
        labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
        datasets: [
          {
            label: "Highest Schooling Level",
            data: [55.6, 16.7, 27.8, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      FirstJobFunction: {
        labels: ["Revenue", "Product", "Other", "Finance", "Engineering"],
        datasets: [
          {
            label: "Function",
            data: [11.1, 38.9, 27.7, 5.6, 16.7],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      YearsInJob: {
        labels: ["<1", "1-2", "3+"],
        datasets: [
          {
            label: "Years In Job?",
            data: [50, 33.3, 16.7],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      MidCareerPreUnicorn: {
        labels: ["0", "1", "2", "3", "4+"],
        datasets: [
          {
            label: "# of Jobs Pre-Unicorn",
            data: [16.7, 0, 27.8, 5.6, 50],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      MidCareerFunction: {
        labels: ["Revenue", "Product", "Engineering", "Other", "Finance"],
        datasets: [
          {
            label: "Most Common Function",
            data: [11.1, 50, 0, 16.7, 22.2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      PriorCompaniesFounded: {
        labels: ["Founder", "Series A/B", "Series C/D", "Series E+"],
        datasets: [
          {
            label: "Prior Companies Founded",
            data: [8.3, 8.3, 33.3, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      YearsPostCollege: {
        labels: ["CXO", "Founder", "VP / Manager"],
        datasets: [
          {
            label: "Years Post-College",
            data: [91.7, 8.3, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  },
  //CFO
  {
    id: "CFO",
    data: [
      "CFOs followed a tried-and-true finance path: undergraduate business schools, a couple jobs, and then an MBA. Nearly 60% of CFOs had gotten an advanced business degree, almost all from top-5 ranked schools. Their undergrad profiles were a bit more mixed - some attended top schools, but top undergraduate business programs were more likely. They were less likely to be international than nearly every other cohort, and are the oldest of all the executives.",
      "CFOs began their careers in four main ways: management consulting, investment banking, investing, or company accounting. The last was the least common - strategic finance was a more common avenue. These positions tended to be springboards to begin climbing the corporate ladder: CFOs did not switch positions much until they had achieved a meaningful level of seniority, in which case it was easy to transition among different startups.",
      "CFOs will move fluidly between the investment world and the finance role at companies. Some come directly from private equity or venture capital firms that they were previously working at. They join unicorns later on in the company journey, typically after having worked on the Finance side of another corporate. It was extremely rare for companies to hire CFOs who had not held prior senior roles in the space.",
      `CFOs were almost always hired late in the journey as a way of building out the management team. In the few cases where they held founder titles, it was a "strategic CFO" title that included broader business-building responsibilities. CFOs tend to be among the most mature team members and come with a wealth of experience to held the company grow out of any early habits and prepare for a public listing.`,
    ],
    GraphData: {
      EduUnderGrad: {
        labels: ["Ivy League", "Other Top 30", "Other US", "Int'l"],
        datasets: [
          {
            label: "Undergrad Institution",
            data: [13, 34.8, 34.8, 17.4],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      EduHighSchool: {
        labels: ["Undergrad", "Master's", "MBA / JD", "PHD"],
        datasets: [
          {
            label: "Highest Schooling Level",
            data: [31.4, 8.6, 57.1, 2.9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      FirstJobFunction: {
        labels: ["Revenue", "Product", "Other", "Finance", "Engineering"],
        datasets: [
          {
            label: "Function",
            data: [8.6, 0, 34.3, 51.4, 5.7],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      YearsInJob: {
        labels: ["<1", "1-2", "3+"],
        datasets: [
          {
            label: "Years In Job?",
            data: [8, 48, 44],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            tension: 0.2,
            hoverOffset: 4,
          },
        ],
      },
      MidCareerPreUnicorn: {
        labels: ["0", "1", "2", "3", "4+"],
        datasets: [
          {
            label: "# of Jobs Pre-Unicorn",
            data: [14.3, 5.7, 0, 11.4, 68.6],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      MidCareerFunction: {
        labels: ["Revenue", "Product", "Engineering", "Other", "Finance"],
        datasets: [
          {
            label: "Most Common Function",
            data: [2.9, 17.1, 65.7, 0, 14.3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      PriorCompaniesFounded: {
        labels: ["Founder", "Series A/B", "Series C/D", "Series E+"],
        datasets: [
          {
            label: "Prior Companies Founded",
            data: [9.4, 21.9, 21.9, 46.9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      YearsPostCollege: {
        labels: ["CXO", "Founder", "VP / Manager"],
        datasets: [
          {
            label: "Years Post-College",
            data: [90.6, 9.4, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    },
  },
];
