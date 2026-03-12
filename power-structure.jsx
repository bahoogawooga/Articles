import { useState } from "react";

const nodes = [
  {
    id: "T1",
    tier: "TIER 1",
    title: "GENERATIONAL WEALTH NETWORKS",
    accent: "#8a6a2a",
    accentLight: "#f5eed8",
    accentBorder: "#d4c49a",
    status: "PATTERN-EVIDENCED — STRUCTURALLY OPAQUE",
    evidence: "partial",
    tags: ["Private Family Offices", "Closed Trusts", "Dynastic Intermarriage", "Invisible Wealth", "No Public Accounting"],
    desc: "Dozens of families globally hold wealth invisible to Forbes — structured through private trusts, family offices, and foundations with no public disclosure requirements. Epstein's DOJ files reference serving specific dynastic interests. True inner-circle composition remains unverifiable — but the pattern of generational, unaccountable wealth concentration is documented through Panama Papers, Paradise Papers, and FinCEN Files.",
    why: "They are above the systems designed to regulate them because, in many cases, they financed the creation of those systems. Private trusts have no public accounting. Family offices face minimal regulatory oversight. The structural opacity is not a bug — it is the product.",
    mechanisms: [
      "Wealth held in private trusts with no public disclosure — structurally unknowable by design",
      "Intermarriage across dynasties consolidates power over centuries, not election cycles",
      "Family offices manage $6T+ globally with less regulatory oversight than a community bank",
      "Panama Papers, Paradise Papers, FinCEN Files: each leak reveals the same architecture of concealment",
    ],
  },
  {
    id: "T2",
    tier: "TIER 2",
    title: "THE COMPLIANCE NETWORK",
    accent: "#993333",
    accentLight: "#f8ecec",
    accentBorder: "#ddb5b5",
    status: "EXTENSIVELY DOCUMENTED — DOJ FILES",
    evidence: "strong",
    tags: ["3.5M Pages Released", "180K Images", "2,000 Videos", "1,000+ Survivors", "Mutual Destruction Pact"],
    desc: "The binding glue of the structure. 3.5 million pages released. 180,000 images. 2,000 videos. Over 1,000 identified survivors. The operation ran for decades across multiple continents. Virginia Giuffre — the most prominent survivor and witness — died by suicide in April 2025 in Western Australia. Maxwell invokes the Fifth Amendment. Four co-conspirators remain permanently redacted in DOJ files.",
    why: "The evidence exists — millions of pages worth. The DOJ possesses it. And has officially declared the review complete with no further prosecutions expected. The compliance network is held together by mutual destruction: everyone has enough on everyone else that prosecution of any node threatens the entire network. The four permanently redacted co-conspirators are protected above DOJ clearance level — meaning the department nominally responsible for prosecution literally cannot see who it would need to prosecute.",
    mechanisms: [
      "Kompromat architecture: mutual exposure prevents any single node from defecting",
      "Maxwell offered cooperation — contingent on Trump clemency. Clemency was never offered.",
      "Virginia Giuffre died April 2025 — the most important witness and public voice, gone",
      "Four co-conspirators permanently redacted — names protected above DOJ operational level",
      "2008 non-prosecution agreement granted broad federal immunity to unnamed co-conspirators",
    ],
  },
  {
    id: "T3",
    tier: "TIER 3",
    title: "ASSET MANAGEMENT CONCENTRATION",
    accent: "#5f4a8a",
    accentLight: "#f0ecf5",
    accentBorder: "#c5b8d8",
    status: "FULLY DOCUMENTED — SEC FILINGS",
    evidence: "documented",
    tags: ["BlackRock $10T AUM", "Vanguard $8T AUM", "State Street $4T AUM", "ALADDIN Platform", "Cross-Ownership"],
    desc: "Three firms manage $22 trillion in assets and exercise outsized voting power over virtually every significant public company in America — including substantial stakes in each other. They manage funds on behalf of millions of investors, but the voting power is concentrated in management. Larry Fink co-signed the statement managing WEF CEO Brende's departure after Epstein revelations. Fink simultaneously holds positions as BlackRock CEO, WEF Co-Chair, and CFR board member.",
    why: "They exercise the voting power of pension funds, retirement accounts, and index funds held by ordinary people. They don't own the capital — they control the decisions. They vote on board composition at the media companies covering Epstein. They vote on law firm leadership defending the accused. They manage the financial infrastructure moving the money. Nobody investigates the hand that votes their retirement.",
    mechanisms: [
      "Voting power concentration: three firms cast decisive votes at most S&P 500 companies despite not owning the underlying capital",
      "ESG and governance scoring: capital allocation rewards institutional compliance without explicit instruction",
      "ALADDIN risk platform: institutions feeding data into the system also feed BlackRock intelligence on themselves",
      "Cross-pollination: Fink co-managed WEF leadership transition — institutional capture operating across sectors simultaneously",
    ],
  },
  {
    id: "T4",
    tier: "TIER 4",
    title: "GLOBAL COORDINATION LAYER",
    accent: "#8a7030",
    accentLight: "#f5f0e0",
    accentBorder: "#d8cc9a",
    status: "DOCUMENTED — CURRENTLY FRACTURING",
    evidence: "partial",
    tags: ["WEF/Davos Under Pressure", "Young Global Leaders", "CFR / Trilateral Commission", "Think Tank Pipeline", "Epstein: Access Broker"],
    desc: "WEF CEO Borge Brende resigned February 2026 over Epstein ties — 27 documented contacts. Fink co-managed the transition as WEF Co-Chair. This layer is actively fracturing under file exposure — but the fractures reveal the structure rather than destroying it. Resignations are managed exits, not prosecutions.",
    why: "The coordination layer is visibly damaged but operationally intact. Brende resigned. He was not charged. The network reroutes around exposed nodes while the underlying infrastructure — annual summits, leadership pipelines, think tank funding channels — continues functioning.",
    mechanisms: [
      "Davos: annual simultaneous alignment of financial, political, and media power holders",
      "Young Global Leaders: pre-selected political figures placed into government across dozens of countries",
      "Think tank pipeline: dynastic money → 'independent research' → government policy adoption — no visible fingerprints",
      "Epstein's role now confirmed in files: access broker, intelligence collector, network concierge",
    ],
  },
  {
    id: "T5",
    tier: "TIER 5",
    title: "INTELLIGENCE & ENFORCEMENT APPARATUS",
    accent: "#2e7050",
    accentLight: "#e8f3ee",
    accentBorder: "#a5ccb8",
    status: "DOCUMENTED — UNDER ACTIVE DISRUPTION",
    evidence: "documented",
    tags: ["CIA / NSA / FBI", "70% Private Contractors", "Career Bureaucracy", "DOGE Disruption", "Factional Warfare"],
    desc: "The traditional enforcement arm is under unprecedented restructuring. CIA director replaced. FBI leadership changed. Career bureaucracy systematically targeted through DOGE. But the financial concentration layer above — completely untouched. No BlackRock investigation. No Vanguard scrutiny. No dynastic family probes. The disruption is selective in a way that raises its own questions.",
    why: "The bureaucratic layer is being disassembled — but by actors who are themselves networked into the financial layer above it. DOGE accessing federal financial databases may represent the most comprehensive intelligence collection operation ever conducted — now in private hands with minimal oversight. The question isn't disruption vs. status quo. It's: disruption in whose interest?",
    mechanisms: [
      "70% of intelligence budget flows through private contractors — the 'deep state' is largely privatized already",
      "Publications Review Board: lifetime contracts suppress former employee disclosures permanently",
      "NSA surveillance data on political figures flows upward to whoever controls access",
      "Compartmentalization: most employees genuinely do not know what the worst-case factions do",
    ],
  },
  {
    id: "T6",
    tier: "TIER 6",
    title: "THE REVOLVING DOOR",
    accent: "#357088",
    accentLight: "#e8f0f5",
    accentBorder: "#a5c5d5",
    status: "FULLY DOCUMENTED",
    evidence: "documented",
    tags: ["Elite Schools → Government", "Government → Contractors", "Contractors → Think Tanks", "$600K Speaking Fees", "Board Seat Rewards"],
    desc: "The mechanism that makes structural loyalty self-enforcing without explicit instructions. The financial reward system communicates everything. This partially explains why DOJ declared the Epstein review complete: the career lawyers making that decision will rotate into the private firms representing the accused. Brad Karp — Paul Weiss chairman — resigned over Epstein ties. His firm had been defending the very people the DOJ was nominally investigating.",
    why: "The prosecutor who closes the Epstein case gets a partnership at a white-shoe law firm. The one who pushes for prosecutions gets professionally isolated. No explicit threat is required — the career calculus is the instruction set. Post-government wealth depends entirely on maintaining relationships within the network you were supposed to regulate.",
    mechanisms: [
      "Post-government compensation directly correlates with how well elite relationships were maintained while in office",
      "Paul Weiss: the firm defending Epstein-connected figures was chaired by someone with his own Epstein ties",
      "Same individuals rotate between DOJ, corporate law, and financial institutions across decades",
      "No conspiracy required: the implicit cost of aggressive prosecution is losing your entire professional future",
    ],
  },
  {
    id: "T7",
    tier: "TIER 7",
    title: "NARRATIVE CONTROL",
    accent: "#4060aa",
    accentLight: "#eaeef8",
    accentBorder: "#aab8dd",
    status: "DOCUMENTED — VISIBLY DEGRADING",
    evidence: "partial",
    tags: ["Concentrated Media Ownership", "Algorithm Gatekeeping", "Redaction as Censorship", "Framing Discipline", "Public Ahead of Press"],
    desc: "Narrative control is visibly straining. 90% of Americans wanted files released. Joe Rogan accused the administration of gaslighting the public. The population is ahead of the media on this story — itself a sign the information control layer is degrading. But degradation of narrative control hasn't translated into legal accountability.",
    why: "The official position — 'we released the files, review is complete, no further prosecutions' — is believed by almost nobody. Approval of the administration's Epstein handling is in the low 20s. The narrative is failing but the legal machinery it was designed to protect is still operating normally. Narrative control was never the last line of defense — it was the outermost one.",
    mechanisms: [
      "Redaction as active narrative weapon: 2.5M of 6M pages still withheld despite law requiring full release",
      "Uniform framing across outlets: 'appearing in files does not indicate wrongdoing' — repeated verbatim everywhere",
      "DOJ violated its own transparency law deadline — received bipartisan criticism — no consequences",
      "Maxwell grand jury files sealed by federal judge despite sustained public demand for release",
    ],
  },
  {
    id: "T8",
    tier: "TIER 8",
    title: "POLITICAL CAPTURE",
    accent: "#8a7a20",
    accentLight: "#f5f2e0",
    accentBorder: "#d5cc8a",
    status: "FULLY DOCUMENTED — OPERATING IN THE OPEN",
    evidence: "documented",
    tags: ["427-1 Vote Ignored", "AG Bondi: 'On My Desk'", "Zero Prosecutions", "Maxwell: Minimum Security", "Law Violated"],
    desc: "The most revealing current data point: Congress voted 427-1 to force file release. The AG said the client list was 'sitting on her desk.' The White House Counsel promised prosecutions. Then: no prosecutions announced. Maxwell transferred to minimum security. Review declared complete. The gap between promise and action is itself the evidence of capture.",
    why: "427 members of Congress voted for transparency. The executive branch then violated the law by missing the mandated release deadline. It received 'bipartisan criticism.' Nothing happened. A near-unanimous congressional vote produced no accountability. That is political capture operating in full daylight — the institutions designed to check power are routing their output through the same captured system.",
    mechanisms: [
      "AG Bondi: 'sitting on my desk' (Feb 2025) → 'review complete, no prosecutions' (Feb 2026) — a twelve-month contradiction",
      "Maxwell moved to minimum security July 2025 after meeting with Deputy AG Blanche",
      "Congress voted 427-1 — the administration violated the resulting law — zero consequences followed",
      "Four redacted co-conspirators remain protected above the level of congressional oversight",
    ],
  },
  {
    id: "T9",
    tier: "TIER 9",
    title: "THE POPULATION",
    accent: "#666666",
    accentLight: "#f0f0f0",
    accentBorder: "#cccccc",
    status: "INFORMED — STRUCTURALLY POWERLESS",
    evidence: "documented",
    tags: ["90% Want Files Released", "77% Want Everything", "⅔ Believe Withholding", "No Arrests in US", "International Contrast"],
    desc: "The population is more informed and more outraged than at any point in this story. 90% wanted files released. 77% wanted everything released. Two-thirds believe the government is deliberately withholding. And yet: no prosecutions. No arrests in America. The gap between public knowledge and legal accountability has never been wider — or more visible.",
    why: "The population has no mechanism to force prosecution. Voting changes faces but not structure. The DOJ answers to the executive. The executive has its own network connections. The judiciary sealed Maxwell's grand jury files. Every accountability mechanism routes through the same captured institutions the crimes are embedded in. Knowing the truth and being able to act on it are categorically different things.",
    mechanisms: [
      "Outrage without mechanism: every legal pathway to accountability passes through a captured institution",
      "Virginia Giuffre gone: the human face of the movement died April 2025",
      "International contrast sharply visible: UK, Norway, Turkey acting — America declaring 'review complete'",
      "UN described the situation as potentially constituting crimes against humanity — US response: review complete",
    ],
  },
];

const connectors = [
  "operates through",
  "enforced via",
  "financed by",
  "coordinated through",
  "operationally enforced by",
  "sustained through",
  "narratively maintained by",
  "legally captured through",
  "leaves without recourse",
];

const evidenceColors = {
  documented: { bg: "#e6f2e6", border: "#a0cca0", text: "#2a6e2a", label: "DOCUMENTED" },
  strong: { bg: "#fef3e0", border: "#e0c88a", text: "#8a6a1a", label: "STRONG EVIDENCE" },
  partial: { bg: "#f5f0e5", border: "#d4c49a", text: "#8a7040", label: "PATTERN-BASED" },
};

const internationalData = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    actions: [
      "Andrew Mountbatten-Windsor arrested Feb 19 — first senior royal arrested in centuries — on suspicion of misconduct in public office. Released under investigation.",
      "Peter Mandelson arrested Feb 23 — former ambassador to US, ex-cabinet minister — on suspicion of misconduct in public office. Released on bail.",
      "PM Starmer's chief of staff resigned. 11+ police forces circling Andrew. Royal Lodge searched.",
    ],
    acting: true,
  },
  {
    flag: "🇳🇴",
    country: "Norway",
    actions: [
      "Former PM Thorbjørn Jagland charged with aggravated corruption.",
      "Diplomatic officials under investigation.",
    ],
    acting: true,
  },
  {
    flag: "🇹🇷",
    country: "Turkey",
    actions: [
      "Prosecutors actively reviewing Epstein files.",
      "Investigation opened into trafficking of Turkish minors.",
    ],
    acting: true,
  },
  {
    flag: "🇺🇸",
    country: "United States",
    actions: [
      "DOJ review declared 'complete.' No prosecutions announced.",
      "Maxwell in minimum security. Four co-conspirators permanently redacted.",
      "Key witness dead. 2.5M pages still withheld. Grand jury files sealed.",
    ],
    acting: false,
  },
];

function Connector({ label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 0" }}>
      <div style={{ width: "1px", height: "10px", background: "#d0cec8" }} />
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: "13px",
        color: "#777",
        fontStyle: "italic",
        letterSpacing: "0.2px",
        padding: "3px 0",
      }}>{label}</div>
      <div style={{ width: "1px", height: "6px", background: "#d0cec8" }} />
      <div style={{ color: "#bbb", fontSize: "12px", lineHeight: 1 }}>▾</div>
    </div>
  );
}

function TierCard({ node, isOpen, onToggle }) {
  const ev = evidenceColors[node.evidence];
  return (
    <div style={{ marginBottom: "2px" }}>
      <div
        onClick={onToggle}
        style={{
          background: isOpen ? "#fafaf8" : "#fdfdfc",
          border: `1px solid ${isOpen ? node.accentBorder : "#e5e5e0"}`,
          borderRadius: isOpen ? "5px 5px 0 0" : "5px",
          padding: "14px 18px",
          cursor: "pointer",
          transition: "all 0.15s ease",
          boxShadow: isOpen ? `0 1px 8px ${node.accent}10` : "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
          <div>
            <div style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              color: node.accent,
              fontSize: "11px",
              letterSpacing: "2.5px",
              fontWeight: 600,
              marginBottom: "3px",
              opacity: 0.75,
            }}>{node.tier}</div>
            <div style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              color: "#1a1a18",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.2px",
              lineHeight: 1.3,
            }}>{node.title}</div>
          </div>
          <div style={{
            background: ev.bg,
            border: `1px solid ${ev.border}`,
            color: ev.text,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.8px",
            fontWeight: 500,
            padding: "4px 8px",
            borderRadius: "3px",
            whiteSpace: "nowrap",
            flexShrink: 0,
            marginTop: "2px",
          }}>{ev.label}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {node.tags.map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: "12px",
              background: node.accentLight,
              border: `1px solid ${node.accentBorder}60`,
              color: node.accent,
              padding: "2px 8px",
              borderRadius: "3px",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {isOpen && (
        <div style={{
          background: "#f9f9f7",
          border: `1px solid ${node.accentBorder}`,
          borderTop: `1px dashed ${node.accentBorder}88`,
          borderRadius: "0 0 5px 5px",
          padding: "18px 20px",
        }}>
          <p style={{
            fontFamily: "'Archivo', sans-serif",
            color: "#444",
            fontSize: "14px",
            lineHeight: 1.8,
            fontWeight: 400,
            marginBottom: "16px",
          }}>{node.desc}</p>

          <div style={{
            background: "#fff5f5",
            border: "1px solid #e8cccc",
            borderRadius: "4px",
            padding: "14px 16px",
            marginBottom: "16px",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#993333",
              fontSize: "10px",
              letterSpacing: "2px",
              fontWeight: 600,
              marginBottom: "8px",
            }}>WHY NO ONE GOES TO JAIL AT THIS TIER</div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              color: "#775555",
              fontSize: "14px",
              lineHeight: 1.75,
              fontWeight: 400,
            }}>{node.why}</div>
          </div>

          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: node.accent,
            fontSize: "10px",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "10px",
          }}>MECHANISMS</div>
          {node.mechanisms.map((m, i) => (
            <div key={i} style={{
              fontFamily: "'Archivo', sans-serif",
              color: "#555",
              fontSize: "13px",
              lineHeight: 1.7,
              fontWeight: 400,
              padding: "8px 14px",
              marginBottom: "4px",
              background: node.accentLight + "88",
              borderLeft: `2px solid ${node.accentBorder}`,
              borderRadius: "0 3px 3px 0",
            }}>{m}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(null);
  const [showTheology, setShowTheology] = useState(false);

  return (
    <div style={{
      background: "#f4f3f0",
      minHeight: "100vh",
      padding: "32px 16px 48px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Archivo:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #d4c49a55; }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* ─── HEADER ─── */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#aaa",
            marginBottom: "10px",
          }}>MARCH 2026 — INSTITUTIONAL ANALYSIS</div>

          <h1 style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "30px",
            fontWeight: 700,
            color: "#1a1a18",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}>Why Nobody Goes to Jail</h1>

          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "17px",
            fontStyle: "italic",
            color: "#888",
            lineHeight: 1.5,
          }}>
            Mapping how institutional capture protects the Epstein network
          </div>

          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "12px",
            color: "#aaa",
            marginTop: "10px",
          }}>Click any tier to expand full analysis</div>
        </div>

        {/* ─── SCRIPTURAL APEX ─── */}
        <div style={{
          background: "#f8f5f0",
          border: "1px solid #d8d0c0",
          borderRadius: "6px",
          overflow: "hidden",
          marginBottom: "8px",
        }}>
          <div
            onClick={() => setShowTheology(!showTheology)}
            style={{
              padding: "16px 20px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: showTheology ? "1px solid #d8d0c0" : "none",
            }}
          >
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#8a6a2a",
                fontWeight: 600,
                marginBottom: "4px",
              }}>THE UNSEEN ARCHITECTURE</div>
              <div style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "16px",
                color: "#4a3a20",
                fontWeight: 600,
              }}>The Spiritual Architecture — Luke 4:6 & Ephesians 6:12</div>
            </div>
            <div style={{
              color: "#8a6a2a",
              fontSize: "14px",
              transform: showTheology ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.2s",
              flexShrink: 0,
              marginLeft: "12px",
            }}>▾</div>
          </div>

          {showTheology && (
            <div style={{ padding: "18px 20px" }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "14px",
                color: "#8a7a60",
                fontStyle: "italic",
                marginBottom: "16px",
                lineHeight: 1.7,
              }}>
                This is the top of the hierarchy. The institutional tiers below document the earthly structure — but they are not the source. They are the human expression of a spiritual architecture described in Scripture. Everything below is downstream of what is described here.
              </div>

              {/* Satan / Ruler */}
              <div style={{
                background: "#faf6f0",
                border: "1px solid #d8cbb5",
                borderRadius: "4px",
                padding: "14px 16px",
                marginBottom: "10px",
              }}>
                <div style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  color: "#7a4a2a",
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}>The Ruler of This World — Luke 4:5–7</div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#7a6a55",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}>
                  Satan offered Christ all the kingdoms of the world and their authority, declaring it had been delivered to him. Christ did not dispute the claim — only the terms. The entire structure below is downstream of this claim. Every tier beneath operates under a delegated and temporary dominion. The systems were not built despite spiritual corruption — they were built through willing instruments of it. His greatest operational achievement: convincing the world he does not exist, making the structure invisible to those inside it. The offer to Christ reveals the mechanism — worship in exchange for dominion — and the pattern repeats at every tier below: compliance in exchange for power.
                </div>
              </div>

              {/* Principalities */}
              <div style={{
                background: "#f6f4f0",
                border: "1px solid #ccc8bb",
                borderRadius: "4px",
                padding: "14px 16px",
                marginBottom: "10px",
              }}>
                <div style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  color: "#5a4a6a",
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}>Principalities & Powers — Ephesians 6:12</div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#7a6a55",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}>
                  "We do not wrestle against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this age, against spiritual hosts of wickedness in the heavenly places." Paul's framing is precise: the battle is not primarily political, financial, or legal — it is spiritual. No prosecution, no election, no revolution addresses this tier. Every human accountability mechanism is categorically insufficient against the spiritual architecture the tiers below express. This explains why the institutional analysis always arrives at the same conclusion: the population knows the truth and cannot act on it. That is not a failure of effort. It is a category error — fighting a spiritual war with political tools.
                </div>
              </div>

              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "13px",
                color: "#9a8a70",
                fontStyle: "italic",
                lineHeight: 1.7,
                marginTop: "6px",
                paddingLeft: "12px",
                borderLeft: "2px solid #d8d0c0",
              }}>
                The armor described in Ephesians 6:13–17 is not a ballot, a lawsuit, or a congressional vote. It is truth, righteousness, the gospel of peace, faith, salvation, and the word of God. Paul was writing to people living under Roman imperial capture — and told them the real enemy was elsewhere.
              </div>

              {/* Binding Mechanism */}
              <div style={{
                background: "#faf4ee",
                border: "1px solid #d8c8b0",
                borderRadius: "4px",
                padding: "16px 18px",
                marginTop: "16px",
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#8a5030",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}>THE BINDING MECHANISM — WHY CHILDREN</div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                }}>
                  The question the institutional analysis cannot fully answer is: why this specific evil? Why children? The trafficking of minors is not incidental to the network's operation — it is the mechanism that holds the network together. The logic is precise and spiritual in nature.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "10px",
                }}>
                  To bind a network of the most powerful people on earth — people with the resources to betray, flee, or destroy each other — you need a bond that none of them can break. Financial entanglement is not enough; the wealthy can absorb losses. Political leverage is not enough; politicians can be replaced. You need <em>shared participation in the worst possible sin against the most innocent possible victims</em>. That is the binding. Once you have crossed that line together, you are bound forever — not by contract, not by threat, but by the knowledge that exposure destroys everyone simultaneously. No one can defect because everyone is guilty of the same unforgivable thing.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "10px",
                }}>
                  This is why the occult and ritualistic elements documented in survivor testimony are not peripheral — they are structural. The ritual is the initiation. The act against the child is the oath. And the shared guilt is the chain. Scripture calls it what it is: the rulers of the darkness of this age operating through willing human instruments, bound together by acts so dark that the participants can never return to the light without losing everything. The network does not merely use evil as a tool. It uses the <em>specific evil</em> that Christ identified as the most grievous: harm to the least of these. "Whoever causes one of these little ones who believe in me to sin, it would be better for him if a great millstone were hung around his neck and he were thrown into the sea" (Mark 9:42).
                </div>
              </div>

              {/* Two-Layer Architecture */}
              <div style={{
                background: "#f8f0ea",
                border: "1px solid #d8c0a8",
                borderRadius: "4px",
                padding: "16px 18px",
                marginTop: "10px",
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#8a5030",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}>THE TWO LAYERS — COVENANT & OPERATION</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "13px",
                  color: "#9a8a70",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "12px",
                  paddingLeft: "12px",
                  borderLeft: "2px solid #d8c8b0",
                }}>
                  Analytical framework — structurally coherent and consistent with documented patterns, but inferential. Not directly evidenced in released files.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                }}>
                  The binding is not one thing. It operates at two distinct levels, serving two different purposes.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "12px",
                  padding: "12px 14px",
                  background: "#f5ece4",
                  borderLeft: "2px solid #c4a080",
                  borderRadius: "0 4px 4px 0",
                }}>
                  <strong style={{ color: "#7a5030" }}>Layer One — The Covenant.</strong> The dynastic principals bind <em>themselves to each other</em> — voluntarily, knowingly, as peers. They participate in the rituals together. Everyone in the room is equally exposed. The power dynamic is horizontal: a pact among equals who need permanent assurance that none will betray the group. This mechanism predates Epstein by centuries. It is how dynasties have bound themselves to allied dynasties across generations — through shared participation in something so transgressive that the bond becomes irrevocable. These people know exactly who their partners are. They were in the room together.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "8px",
                  padding: "12px 14px",
                  background: "#f5ece4",
                  borderLeft: "2px solid #c4a080",
                  borderRadius: "0 4px 4px 0",
                }}>
                  <strong style={{ color: "#7a5030" }}>Layer Two — The Operation.</strong> The outer ring of judges, prosecutors, politicians, media executives, and intelligence officers are <em>not</em> peers of the inner circle. They are assets. They didn't participate in a ritual among equals — they were lured into a compromising situation, often gradually, often without fully understanding what was happening until they were already in too deep. The cameras they didn't know about. The flight logs they didn't think anyone would ever see. Their binding isn't a covenant among equals. It's leverage held <em>over</em> them <em>by</em> the principals. Their compliance is maintained not by mutual trust but by fear — and, critically, by the fact that they don't know who holds the evidence or how far it has spread.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "12px",
                }}>
                  This two-layer architecture explains what a single-layer model cannot: how the inner circle coordinates with precision while the outer ring operates in permanent uncertainty. The principals have named partners and deliberate loyalty. The operatives have unknown masters and fear-based compliance. A bonded operative doesn't know who holds the footage — the family that originally compromised them, a rival dynasty that obtained copies, an intelligence service that was briefed, or a political operative sitting on a story. That uncertainty is the leash. And it doesn't need a master holding the other end.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "12px",
                }}>
                  Epstein sat at the junction of both layers. He was in the room with the principals — he knew who they were, he served their interests directly. But his function was to build and operate the industrial infrastructure that created the pool of compromised operatives the principals needed. He was the bridge between the covenant and the operation. The families bound themselves to each other through ritual. Epstein bound everyone else to the families through kompromat. That is why his death did not collapse the system. The covenant layer does not need him — those bonds predate him and will outlast him. The operational layer does not need him alive — it only needs the archive to exist and the bonded operatives to know it might be in anyone's hands.
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#6a5a48",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  marginTop: "12px",
                }}>
                  The four redacted names in the FBI's co-conspirator list likely sit at the junction between these two layers — people who are both principals in the covenant <em>and</em> controllers of the operational infrastructure. They are the bridge between the dynastic inner circle and the captured institutional outer ring. That is why their names remain hidden above DOJ clearance level. Revealing them would not just identify criminals. It would expose the architecture itself.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ─── Connector from spiritual to institutional ─── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4px 0 6px" }}>
          <div style={{ width: "1px", height: "10px", background: "#d8d0c0" }} />
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "13px",
            color: "#8a7a60",
            fontStyle: "italic",
            padding: "3px 0",
          }}>manifests through</div>
          <div style={{ width: "1px", height: "6px", background: "#d8d0c0" }} />
          <div style={{ color: "#bbb", fontSize: "12px", lineHeight: 1 }}>▾</div>
        </div>

        {/* ─── CORE THESIS ─── */}
        <div style={{
          background: "#fdf8f8",
          border: "1px solid #e0cccc",
          borderRadius: "5px",
          padding: "18px 20px",
          marginBottom: "24px",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#993333",
            fontWeight: 600,
            marginBottom: "10px",
          }}>THE CORE FINDING</div>
          <div style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "15px",
            color: "#665050",
            lineHeight: 1.8,
          }}>
            Nobody is going to jail because every accountability mechanism — DOJ, judiciary, Congress, media — routes through the same captured institutions the crimes are embedded in. The files were released. The review was declared complete. No prosecutions were announced. The most important witness is dead. And 90% of the country is watching it happen with no structural mechanism to change the outcome.
          </div>
        </div>

        {/* ─── EVIDENCE LEGEND ─── */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginBottom: "18px",
          flexWrap: "wrap",
        }}>
          {Object.values(evidenceColors).map((ev, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "2px",
                background: ev.text,
                opacity: 0.6,
              }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.5px",
                color: "#888",
              }}>{ev.label}</span>
            </div>
          ))}
        </div>

        {/* ─── TIERS ─── */}
        {nodes.map((node, idx) => (
          <div key={node.id}>
            {idx > 0 && <Connector label={connectors[idx - 1]} />}
            <TierCard
              node={node}
              isOpen={open === node.id}
              onToggle={() => setOpen(open === node.id ? null : node.id)}
            />
          </div>
        ))}

        {/* ─── INTERNATIONAL COMPARISON ─── */}
        <div style={{
          marginTop: "28px",
          background: "#fdfdfc",
          border: "1px solid #e0e0da",
          borderRadius: "5px",
          padding: "18px 20px",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#999",
            fontWeight: 600,
            marginBottom: "14px",
          }}>INTERNATIONAL COMPARISON — 2025–2026</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {internationalData.map((item, i) => (
              <div key={i} style={{
                background: item.acting ? "#f5faf6" : "#fdf6f5",
                border: `1px solid ${item.acting ? "#c5ddc8" : "#e0c5c0"}`,
                borderRadius: "4px",
                padding: "12px 14px",
              }}>
                <div style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  color: item.acting ? "#2a6e3a" : "#993333",
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}>{item.flag} {item.country}</div>
                {item.actions.map((a, j) => (
                  <div key={j} style={{
                    fontFamily: "'Archivo', sans-serif",
                    color: "#666",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    marginBottom: j < item.actions.length - 1 ? "4px" : 0,
                    paddingLeft: "8px",
                    borderLeft: `1px solid ${item.acting ? "#c5ddc8" : "#e0c5c0"}`,
                  }}>{a}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── SURVIVOR ACCOUNT ─── */}
        <div style={{
          marginTop: "28px",
          background: "#fdfcfa",
          border: "1px solid #e0dcd0",
          borderRadius: "5px",
          padding: "20px",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#8a6a2a",
            fontWeight: 600,
            marginBottom: "12px",
          }}>REMEMBER WHY THIS MATTERS</div>

          <div style={{
            background: "#faf6f0",
            border: "1px solid #e0d8c8",
            borderRadius: "4px",
            padding: "16px 18px",
            marginBottom: "14px",
          }}>
            <div style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              color: "#3a3025",
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "10px",
            }}>"I'm Beyond Broken"</div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              color: "#666",
              fontSize: "14px",
              lineHeight: 1.8,
              marginBottom: "14px",
            }}>
              Among the millions of pages in the Epstein files is a diary written by a survivor identified only as "Kimberley." The entries, believed to date between 2001 and 2004, document repeated abuse, isolation, forced pregnancies, and a baby — born alive — taken from her while Ghislaine Maxwell was allegedly in the room. She was a teenager. In one entry she writes that she got only 10 to 15 minutes to hold and feed her child before they took her. A sonogram is glued to the page. Other entries are filled with prayers asking to be released from what she calls "torture and hell." To date, there are no known investigations or charges connected to her account. It is unclear what happened to the baby.
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "14px",
              fontStyle: "italic",
              color: "#998870",
              marginBottom: "16px",
              paddingLeft: "14px",
              borderLeft: "2px solid #d8d0c0",
              lineHeight: 1.7,
            }}>
              Every tier in this chart exists to explain why nobody has been held accountable for what was done to her — and to hundreds of others like her.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <a
                href="https://www.instagram.com/reels/DU1Z2HJlKMY/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "14px",
                  color: "#6a5030",
                  textDecoration: "none",
                  padding: "8px 14px",
                  background: "#f0ebe0",
                  border: "1px solid #ddd5c5",
                  borderRadius: "4px",
                  display: "inline-block",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => e.target.style.background = "#e8e0d0"}
                onMouseLeave={(e) => e.target.style.background = "#f0ebe0"}
              >
                → Watch: "I'm Beyond Broken" — Survivor Diary from the Epstein Files
              </a>
              <a
                href="https://www.scrippsnews.com/us-news/crime/epstein-files/im-beyond-broken-diary-in-epstein-files-details-abuse-girl-says-she-endured"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "13px",
                  color: "#8a7a60",
                  textDecoration: "none",
                  padding: "6px 14px",
                  background: "#f5f0e8",
                  border: "1px solid #e0dad0",
                  borderRadius: "4px",
                  display: "inline-block",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => e.target.style.background = "#ede5d8"}
                onMouseLeave={(e) => e.target.style.background = "#f5f0e8"}
              >
                → Read: Scripps News Investigation — Full Diary Coverage
              </a>
            </div>
          </div>

          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "12px",
            color: "#aaa",
            lineHeight: 1.6,
            paddingLeft: "10px",
            borderLeft: "2px solid #e0dcd0",
          }}>
            Content warning: accounts of sexual abuse, forced pregnancy, and trafficking of a minor. If you or someone you know has been affected by sexual abuse, contact RAINN at <strong style={{ color: "#888" }}>1-800-656-4673</strong> or visit <a href="https://www.rainn.org" target="_blank" rel="noopener noreferrer" style={{ color: "#6a5030" }}>rainn.org</a>. If you or someone you know is in crisis, call or text <strong style={{ color: "#888" }}>988</strong>.
          </div>
        </div>

        {/* ─── METHODOLOGY NOTE ─── */}
        <div style={{
          marginTop: "24px",
          padding: "0 4px",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#bbb",
            marginBottom: "8px",
          }}>METHODOLOGY & SOURCING</div>
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "12px",
            color: "#888",
            lineHeight: 1.7,
          }}>
            Evidence grading: <span style={{ color: "#2a6e2a" }}>Documented</span> = sourced from DOJ files, SEC filings, congressional records, or major news reporting.{" "}
            <span style={{ color: "#8a6a1a" }}>Strong Evidence</span> = supported by released files and corroborating testimony but with gaps.{" "}
            <span style={{ color: "#8a7040" }}>Pattern-Based</span> = structural analysis inferred from documented patterns — directionally supported but not fully verifiable.{" "}
            The scriptural framework is positioned as the apex of the hierarchy — the spiritual architecture above the institutional tiers — sourced from Scripture.
          </div>
        </div>

        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "13px",
          color: "#aaa",
          textAlign: "center",
          marginTop: "28px",
          fontStyle: "italic",
        }}>
          Not all claims are equally verified. Sources span Scripture, DOJ releases, SEC filings, congressional records, major news outlets, and analytical inference.
        </div>

        {/* ─── CREDITS ─── */}
        <div style={{
          marginTop: "32px",
          paddingTop: "20px",
          borderTop: "1px solid #e0ddd8",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#bbb",
            marginBottom: "10px",
          }}>CREDITS</div>
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "13px",
            color: "#999",
            lineHeight: 1.8,
          }}>
            <p style={{ marginBottom: "8px" }}>Research, analysis, and structural framework by Eugene Han (ehan@snapdallas.com).</p>
            <p style={{ marginBottom: "8px" }}>Written and developed in collaboration with Claude (Anthropic) — Claude Opus 4.6. Claude assisted with research verification, factual cross-referencing, structural critique, evidence grading, and interactive chart development. All editorial direction, theological framing, and analytical conclusions are the author's own.</p>
            <p style={{ marginBottom: "0" }}>Factual claims verified against DOJ file releases, congressional records, SEC filings, ICIJ reporting (Panama Papers, Paradise Papers, FinCEN Files), and major news outlets including NBC News, CBS News, PBS NewsHour, NPR, CNN, Al Jazeera, ABC News, Scripps News, and the BBC. Scriptural framework draws from Luke 4:5–7, Ephesians 6:12–17, and Mark 9:42 (NKJV).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
