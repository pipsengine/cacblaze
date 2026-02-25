import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import { menuData } from '@/data/menuData';
import AppImage from '@/components/ui/AppImage';
import { getContextualImage, getCuratedImagesForCategory } from '@/utils/imageService';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function formatSlug(slug?: string) {
  const s = typeof slug === 'string' ? slug : '';
  return (
    s
      .split('-')
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') || 'Technology'
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const techMenu = menuData.mainMenu.find((m) => m.id === 'technology');
  let categoryItem;

  if (techMenu?.categories) {
    for (const cat of techMenu.categories) {
      const item = cat.items?.find((i) => i.href === `/technology/${slug}`);
      if (item) {
        categoryItem = item;
        break;
      }
    }
  }

  const title = categoryItem ? categoryItem.label : formatSlug(slug);

  return {
    title: `${title} - Technology - CACBLAZE`,
    description: `Expert guides, troubleshooting tips, and resources about ${title}.`,
  };
}

export default async function TechCategoryPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const techMenu = menuData.mainMenu.find((m) => m.id === 'technology');
  let categoryItem;

  if (techMenu?.categories) {
    for (const cat of techMenu.categories) {
      const item = cat.items?.find((i) => i.href === `/technology/${slug}`);
      if (item) {
        categoryItem = item;
        break;
      }
    }
  }

  const title = categoryItem ? categoryItem.label : formatSlug(slug);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Technology', href: '/technology' },
    { name: title, href: `/technology/${slug}` },
  ];

  const contentMap: Record<
    string,
    {
      description: string;
      sections: { title: string; items: string[] }[];
      checklist?: string[];
    }
  > = {
    'internet-issues': {
      description:
        'A comprehensive, narrative-first troubleshooting playbook for unreliable internet connections. This guide helps you move from simple checks to advanced diagnostics, covering mobile data, Wi‑Fi, DNS, performance, and app-specific failures. Follow each section carefully, take notes of what you try, and stop once connectivity is restored. If problems persist, capture your findings and escalate with confidence.',
      sections: [
        {
          title: 'Quick Checks',
          items: [
            'Begin by toggling Airplane Mode for at least 10–20 seconds to fully reset your device radios. This action can clear minor radio lockups that prevent your phone from reattaching to the network.',
            'Restart your device and, if applicable, power-cycle your router and modem for 30–60 seconds. Reboots clear stale caches, stuck processes, and failed handovers that accumulate over time.',
            'Check official ISP outage portals and verified social accounts for region-wide disruptions. Widespread outages will not be fixed locally; patience and status monitoring are key.',
            'Verify your mobile data balance and the validity period of your bundle or plan. Expired bundles or depleted balances are common root causes of sudden connectivity loss.',
            'Ensure your SIM is detected and the preferred network mode is set correctly (4G/3G auto). Incorrect modes or disabled radios can block registration and data sessions.',
            'If on Wi‑Fi, confirm you are connected to the intended SSID and that the connection shows internet access rather than local-only connectivity.',
          ],
        },
        {
          title: 'Mobile Data Troubleshooting',
          items: [
            'Temporarily disable any VPN, firewall, or content filtering apps. These tools can block or throttle certain protocols, causing timeouts in browsers and streaming apps.',
            'Reset the APN settings to the default values recommended by your carrier. Delete custom APNs that were added for tethering or alternative gateways; misconfigured APNs lead to PDP context failures.',
            'Confirm your preferred network type is set to automatic 4G/3G selection. Locking to a non-existent band or forcing 5G in weak coverage areas may cause constant detach/attach cycles.',
            'Remove your SIM card, clean the contacts gently, and reinsert it. Intermittent signal can be caused by poor physical contact, especially in older trays or after impacts.',
            'Test with a second SIM (ideally from a different carrier). If the second SIM works reliably, the issue is likely with the first line or its provisioning; if both fail, suspect the device radio.',
            'Run a field test (if available) to observe signal metrics like RSRP, RSRQ, and SINR. Extremely low values indicate poor coverage or high interference, which requires location or antenna changes.',
          ],
        },
        {
          title: 'Wi‑Fi and Router',
          items: [
            'Power-cycle your router and modem for a full minute to clear stale NAT tables, DHCP leases, and Wi‑Fi driver issues that accumulate under heavy usage.',
            'Reduce physical obstructions by moving closer to the router; thick walls, appliances, and metal objects can dramatically weaken signal and increase retries.',
            'Forget the SSID on your device and reconnect, ensuring the password and security type (WPA2/WPA3) match the router configuration. Mismatched security leads to silent failures.',
            'Switch between 2.4 GHz and 5 GHz bands as needed. Use distinct SSIDs for each band to force association preference and avoid random band steering that harms performance.',
            'Update router firmware to the latest stable release. Disable Smart Connect if devices misassociate or frequently roam; manual band selection can stabilize links.',
            'Try non-overlapping channels (1/6/11 on 2.4 GHz) and a DFS-safe channel on 5 GHz to avoid local interference and neighbor congestion.',
          ],
        },
        {
          title: 'DNS and Name Resolution',
          items: [
            'Change your DNS to a reliable public resolver like 1.1.1.1 or 8.8.8.8. Apply the setting at the router for consistent behavior across all connected devices.',
            'Flush local DNS caches (e.g., ipconfig /flushdns on Windows) after changing resolvers to avoid stale or poisoned entries causing misroutes.',
            'Identify whether the failure affects specific domains only. If only certain sites fail, test them via direct IP or alternative resolvers to confirm a DNS-only problem.',
            'Temporarily disable secure DNS/DoH in your browser to rule out resolver compatibility issues or middlebox interference that breaks encrypted DNS.',
            'If corporate or school networks are involved, verify that internal DNS requirements are met and split-horizon DNS is properly configured.',
          ],
        },
        {
          title: 'Performance and Speed',
          items: [
            'Run multiple speed tests at different times of day on both mobile data and Wi‑Fi, and compare results to your plan’s advertised speeds. Peak-hour congestion can be unavoidable.',
            'Observe radio signal quality (RSRP/RSRQ/SINR) where available. Even with “full bars,” poor SINR can cause retransmissions and erratic throughput.',
            'Limit background downloads, cloud sync, and OS updates during critical tasks. Competing traffic reduces available bandwidth and increases latency.',
            'Enable QoS or bandwidth control on your router to prioritize work calls and critical applications. Deprioritize bulk downloads and streaming on non-essential devices.',
            'Consider relocating the router centrally, elevating it, and minimizing interference to achieve a more uniform coverage footprint across rooms.',
          ],
        },
        {
          title: 'App‑Specific Problems',
          items: [
            'Update affected applications to the latest version and clear their cache/data if they misbehave. Corrupted local state can prevent login or break streaming.',
            'If you encounter login loops, sign out, fully close the app, and sign in again. As a last resort, reinstall the app to regenerate clean state.',
            'Check official status dashboards for platforms like WhatsApp, YouTube, Netflix, or your cloud providers. Global outages are beyond local control.',
            'Disable battery saver and data saver if the app requires background activity. Aggressive power and data policies can silently block essential background traffic.',
            'Verify app permissions for network, background processing, and storage. Missing permissions can manifest as network errors.',
          ],
        },
        {
          title: 'Advanced Diagnostics',
          items: [
            'Ping a stable host (such as 1.1.1.1) to measure baseline latency and packet loss. Persistent loss indicates link-layer problems or upstream congestion.',
            'Run a traceroute to identify where hops fail or introduce high latency. Failures close to home suggest local wiring or ISP edge issues.',
            'Inspect router logs for DSL/cable sync errors, WAN DHCP failures, or frequent reauthentication events. These point towards line instability or provisioning faults.',
            'Review IP addressing and NAT topology (single vs double‑NAT). Double‑NAT can break specific apps, VPNs, or gaming connectivity and may require bridge mode.',
            'If you use IPv6, verify prefix assignment and SLAAC/DHCPv6 health. Misconfigured IPv6 can cause delays even when IPv4 appears fine.',
          ],
        },
        {
          title: 'Security and Safety',
          items: [
            'Scan devices for malicious apps and remove unknown configuration profiles. Malicious profiles can redirect traffic or install hostile certificates.',
            'Change the router admin password and disable remote management unless you explicitly need it. Exposed admin panels are a common attack surface.',
            'Ensure your Wi‑Fi is secured with WPA2 or WPA3 and avoid open networks. Weak encryption invites eavesdropping and session hijacking.',
            'Use reputable VPN services only when necessary, and measure their performance impact. Poor VPN exit nodes can cause severe throughput and latency issues.',
            'Regularly audit connected devices and revoke access for unknown clients to maintain a trusted local network.',
          ],
        },
        {
          title: 'Nigeria‑Specific Tips',
          items: [
            'Check your bundle rollover rules and off‑peak data windows. Smart scheduling of heavy downloads can reduce costs and increase reliability.',
            'Confirm APN settings for your specific network and avoid legacy APNs when using 4G/5G. Legacy gateways may be deprecated or rate-limited.',
            'Use official self‑service USSD codes or mobile apps to review service state, reactivate plans, or report faults directly.',
            'Monitor fair usage policies for so‑called “unlimited” plans. Throttling at cap thresholds is common and can mimic technical faults.',
            'Document outages with timestamps and cell location where possible; patterns help support teams identify tower-level issues.',
          ],
        },
        {
          title: 'Escalation and Support',
          items: [
            'Keep a simple log of timestamps, locations, screenshots, and observed errors. Provide this evidence to support to accelerate resolution.',
            'Test connectivity from multiple locations to separate localized cell congestion from device-level faults.',
            'Contact your ISP or carrier support with your account details, test results, and log entries. Reference specific error messages and steps already tried.',
            'Request line tests, tower investigations, or router replacements if hardware instability is suspected. Ask for escalation when initial responses stall.',
          ],
        },
      ],
      checklist: [
        'Restart device and router; toggle Airplane Mode.',
        'Disable VPN and custom DNS; test basic browsing.',
        'Confirm data balance, APN, and network mode.',
        'Switch Wi‑Fi bands; update router firmware.',
        'Run ping and traceroute; change DNS if needed.',
        'Document failures and contact support with evidence.',
      ],
    },
    'no-service': {
      description:
        'A structured approach to restoring mobile network service when your device shows “No Service.” Work from simple radio resets to deeper network settings, hardware checks, interference mitigation, and region-specific actions. Track each step so you know exactly what helped.',
      sections: [
        {
          title: 'Immediate Actions',
          items: [
            'Toggle Airplane Mode on and off to prompt a fresh network registration. This clears transient attach issues on busy towers.',
            'Restart the device and reinsert the SIM after gently cleaning the contacts. Poor electrical contact can cause random detach events.',
            'Check official coverage maps and outage announcements. If your area is impacted, local fixes will not restore service until the outage ends.',
            'Open Mobile Network settings and attempt manual carrier selection. Reattaching to your carrier can overcome stuck automatic selection.',
          ],
        },
        {
          title: 'Network Settings',
          items: [
            'Set preferred network type to automatic 4G/3G to allow flexible attach. Overly rigid band preferences can cause registration failures.',
            'Reset carrier settings and remove any experimental APNs that might interfere with voice/SMS attach procedures.',
            'If supported, enable VoLTE to improve attach success and voice quality; if VoLTE is unstable in your region, disable it and test again.',
            'Ensure roaming is off if you are in your home region. Misapplied roaming blocks cause silent rejection of attach requests.',
          ],
        },
        {
          title: 'Hardware Checks',
          items: [
            'Inspect the SIM physically for scratches or bends. Test it in a secondary device to separate SIM faults from handset faults.',
            'Remove metal cases and accessories that can attenuate signal. Thin differences can push marginal signals into “No Service.”',
            'Compare multiple devices at the same physical spot. If all devices struggle, coverage is poor; if only yours fails, suspect the handset radio.',
            'Run field test and record RSRP/RSRQ/SINR values. Extremely poor metrics indicate coverage or interference that requires location changes.',
          ],
        },
        {
          title: 'Location and Interference',
          items: [
            'Move outdoors or near large windows to reduce attenuation. Dense concrete and metal structures impair propagation.',
            'Avoid basements, elevators, and shielded rooms where radio waves struggle to penetrate.',
            'Reduce interference sources such as microwaves, cordless phones, and congested Wi‑Fi networks in the 2.4 GHz band.',
            'Consider a certified signal booster matched to local frequency bands if indoor coverage is consistently inadequate.',
          ],
        },
        {
          title: 'Nigeria‑Specific',
          items: [
            'Use self‑service USSD codes to refresh line provisioning or request reconnects; network backends may need a nudge.',
            'Confirm SIM registration status and ensure your NIN is properly linked. Non-compliant lines can be disabled without explicit notice.',
            'Visit official retail outlets for SIM swap if the SIM shows signs of damage or repeated attach errors across devices.',
            'Verify your device supports all local bands used by your carrier. Band mismatch results in persistent attach failures.',
          ],
        },
        {
          title: 'Escalate',
          items: [
            'Collect timestamps, locations, and screenshots of failed network searches and attach prompts. Provide this data to support.',
            'Contact carrier support and request a backend line check for provisioning or barring flags.',
            'If unresolved, request SIM replacement or device radio diagnostics. Persistent failures warrant advanced tests and escalation.',
          ],
        },
        {
          title: 'Firmware and Updates',
          items: [
            'Update device firmware and radio/baseband components where supported; outdated stacks cause attach incompatibilities.',
            'Apply carrier settings updates; these adjust APN and IMS profiles for more reliable registration.',
          ],
        },
        {
          title: 'Roaming and Travel',
          items: [
            'Enable roaming and verify preferred network selection includes partner carriers when traveling.',
            'Use manual carrier selection in border areas to overcome auto selection failures.',
          ],
        },
        {
          title: 'SIM Registration and Compliance',
          items: [
            'Confirm regulatory registration (e.g., NIN linkage) is complete; non‑compliance can silently disable service.',
            'Request backend refresh from the carrier to clear stale barring flags after compliance updates.',
          ],
        },
        {
          title: 'Environmental Patterns',
          items: [
            'Record locations and times when “No Service” appears to identify tower maintenance windows or localized outages.',
            'Test outdoors vs indoors and near windows to separate attenuation issues from provisioning faults.',
          ],
        },
        {
          title: 'Hardware Replacement Decision',
          items: [
            'If attach failure persists across multiple SIMs and carriers, suspect a failing RF front‑end or antenna assembly.',
            'Seek diagnostics; weigh repair cost vs device replacement based on age and parts availability.',
          ],
        },
        {
          title: 'Emergency Alternatives',
          items: [
            'Keep an alternate SIM or eSIM from a second carrier for redundancy.',
            'Use Wi‑Fi calling where supported to regain voice service while mobile attach is unstable.',
          ],
        },
        {
          title: 'Documentation and Case Numbers',
          items: [
            'Maintain case numbers and interaction logs with support; escalate with historical evidence if resolution stalls.',
            'Capture screenshots of field test metrics during failures to aid engineering investigation.',
          ],
        },
      ],
      checklist: [
        'Airplane Mode toggle; restart device.',
        'Manual network selection; reattach.',
        'Field test metrics review.',
        'Test SIM in another device; consider swap.',
      ],
    },
    'data-plans': {
      description:
        'Select data plans intelligently by profiling your real usage, comparing cost per GB, understanding fair usage policies, and validating speed where you live and work. This guide leads you through a thorough decision-making process to avoid regret and surprise throttling.',
      sections: [
        {
          title: 'Profile Your Usage',
          items: [
            'Measure your typical daily traffic across streaming, social media, conferencing, and file sync for at least a week. Use platform analytics or OS-level usage stats for precision.',
            'Identify peak-hour usage and off‑peak windows. Plans that include night or weekend bonuses can significantly reduce effective monthly costs.',
            'Decide whether you need tethering for laptops or additional devices. Some plans throttle or block tethering entirely.',
            'Define minimum acceptable speed and latency for your workflow. Video calls and gaming demand lower jitter and consistent throughput.',
          ],
        },
        {
          title: 'Compare Plans',
          items: [
            'Calculate effective cost per GB including taxes, fees, and promotional periods. Promotions that expire quickly can hide higher long-term costs.',
            'Read fair usage policy caps and throttling thresholds carefully. “Unlimited” often becomes “limited” past specific usage levels.',
            'Balance truly unlimited plans against generous high‑cap bundles. Predictability often matters more than maximum theoretical allowance.',
            'Review night and weekend data allocations. Schedule bulk updates and downloads to leverage off‑peak bonuses.',
          ],
        },
        {
          title: 'Network Performance',
          items: [
            'Run speed tests multiple times a day over several days, both indoors and outdoors. Note variations at work and home to establish realistic expectations.',
            'Assess congestion and stability by tracking latency and jitter. A fast peak speed with unstable latency often yields poor real-world experiences.',
            'Verify your device supports carrier aggregation and the bands used by your carrier. Hardware limitations can cap performance.',
            'Test streaming and gaming to detect packet loss and microbursts. These are early warnings for congested sectors or saturated backhaul.',
          ],
        },
        {
          title: 'Nigeria‑Specific',
          items: [
            'Use official carrier apps to track usage precisely and avoid surprises. Third-party estimations can drift.',
            'Verify promotional bundle validity and renewal behavior. Some promos auto‑convert to more expensive base plans after a period.',
            'Leverage night plans or weekend bundles for bulk transfers and device updates. This optimizes spend and reduces strain on daytime quotas.',
            'Monitor deductions and open support tickets for anomalies. Keep a record of balances before and after usage events.',
          ],
        },
        {
          title: 'Optimize Spend',
          items: [
            'Set usage alerts and auto‑renew controls that trigger before you hit caps. Avoid emergency top‑ups at inflated rates.',
            'Prefer Wi‑Fi for heavy tasks such as cloud backups and system updates to preserve mobile quotas.',
            'Enable data saver OS features and restrict background data for heavy apps like social and video platforms.',
            'Consider family or shared plans when available. Shared pools can be more efficient for multi‑device households.',
          ],
        },
        {
          title: 'Roaming and International',
          items: [
            'Clarify roaming rates and bundles before travel; disable background sync for non‑essential apps.',
            'Prefer local SIMs or eSIM plans for extended trips; compare per‑GB costs and reliability.',
          ],
        },
        {
          title: 'Multi‑SIM Strategy',
          items: [
            'Use dual‑SIM setups to combine a high‑cap plan with a secondary network for coverage redundancy.',
            'Route data through the network with better peak‑hour performance using SIM data preference settings.',
          ],
        },
        {
          title: 'Compression and Efficiency',
          items: [
            'Enable data compression in browsers and supported apps to reduce overhead.',
            'Lower streaming bitrates and default download quality where acceptable to save quota.',
          ],
        },
        {
          title: 'Monitoring and Alerts',
          items: [
            'Set OS and carrier app alerts at 50%, 80%, and 95% usage to preempt hard throttles.',
            'Review per‑app usage weekly to catch silent data hogs introduced by updates.',
          ],
        },
        {
          title: 'Cancellation and Renewal',
          items: [
            'Understand renewal behavior and grace periods; some plans auto‑renew at higher base rates.',
            'Schedule cancellations or switches to align with billing cycles and avoid overlap.',
          ],
        },
        {
          title: 'Bundled Services',
          items: [
            'Evaluate bundles with streaming or social bonuses; confirm these do not degrade main data pools.',
            'Check whether zero‑rating applies consistently across apps and CDNs.',
          ],
        },
      ],
      checklist: [
        'Measure usage baseline for a week.',
        'Compare cost per GB across carriers.',
        'Confirm FUP and throttling details.',
        'Test speed at peak hours before committing.',
      ],
    },
    'smartphone-problems': {
      description:
        'A deep dive into diagnosing and resolving common smartphone issues: stability, performance, hardware sensors, camera and audio glitches, and connectivity. Move from quick wins to thorough tests, documenting findings for future reference.',
      sections: [
        {
          title: 'Stability',
          items: [
            'Update the OS and all apps to the latest versions, applying security patches and bug fixes that address known crash loops and resource leaks.',
            'Clear cache and data for misbehaving apps to purge corrupted local state. Log back in afterwards to reinitialize clean app storage.',
            'Uninstall recently added apps one by one to identify conflicts. Third‑party overlays and accessibility services can destabilize core UI.',
            'Enable safe mode to boot without third‑party apps. If stability returns, reintroduce apps gradually to locate the offender.',
          ],
        },
        {
          title: 'Performance',
          items: [
            'Ensure you have at least 10–20% free storage headroom. Low storage forces the system to constantly reclaim space, hurting performance.',
            'Disable extravagant animations and background refresh for non‑essential apps. Reduce widget count to lower draw and update overhead.',
            'Review battery and CPU usage stats to find runaway processes. Kill or uninstall apps that monopolize resources without user benefit.',
            'Limit auto‑sync intervals and aggressive polling from messaging and social clients. Tune for responsiveness rather than constant updates.',
          ],
        },
        {
          title: 'Hardware',
          items: [
            'Test touch, microphone, speaker, and camera using built‑in diagnostics or reputable tools. Confirm each sensor responds within expected ranges.',
            'Clean charging and audio ports with care; debris and moisture can cause shorts, misreads, and intermittent connections.',
            'Check the display for ghost touches and remove or replace faulty screen protectors. Conductive films can trigger false input.',
            'Run vibration and proximity sensor tests to ensure haptic feedback and screen off/on operations behave correctly around your face.',
          ],
        },
        {
          title: 'Connectivity',
          items: [
            'Reset network settings to clear stale routes, DNS resolvers, and pairing records. Reconfigure trusted Wi‑Fi and Bluetooth devices afterwards.',
            'Rebuild Wi‑Fi and Bluetooth device lists from scratch to remove corrupted pairings and misremembered credentials.',
            'Verify APN and carrier settings. Misconfigured gateways and missing MMS settings can break messaging and data.',
            'Disable VPN temporarily and test baseline connectivity to isolate performance impacts and routing anomalies.',
          ],
        },
        {
          title: 'Data Integrity',
          items: [
            'Back up critical data to a trusted cloud service before major maintenance. Ensure backups are complete and accessible.',
            'Verify contacts and photos synchronization status to prevent silent data drift across devices.',
            'Remove duplicates and extremely large media files that bloat storage and slow scans. Consider compressing videos.',
            'Protect the device with a strong passcode and biometrics to prevent unauthorized changes while troubleshooting.',
          ],
        },
        {
          title: 'Storage Optimization',
          items: [
            'Free space above 20% to reduce constant garbage collection and I/O contention.',
            'Archive large media and clean app caches that grow rapidly (social, browsers).',
          ],
        },
        {
          title: 'Permissions Triage',
          items: [
            'Audit permissions for camera, mic, location, notifications, and background activity; revoke non‑essential access.',
            'Reset permissions for misbehaving apps to force clean re‑prompts and correct state.',
          ],
        },
        {
          title: 'Thermal Management',
          items: [
            'Identify workloads that spike CPU/GPU; reduce frame rates or graphic settings in heavy games.',
            'Avoid charging while running intensive tasks; separate charging from heavy use.',
          ],
        },
        {
          title: 'App Lifecycle',
          items: [
            'Disable auto‑start for non‑essential apps; reduce background refresh intervals.',
            'Use lightweight alternatives for known heavy clients where possible.',
          ],
        },
        {
          title: 'Factory Reset Strategy',
          items: [
            'Back up data, note critical settings, and perform a factory reset if systemic corruption persists.',
            'Restore selectively to avoid reintroducing problematic configurations.',
          ],
        },
        {
          title: 'Warranty and Repair',
          items: [
            'If hardware faults are suspected, check warranty status and authorized service centers.',
            'Document symptoms, timestamps, and reproduction steps to aid technicians.',
          ],
        },
      ],
      checklist: [
        'Update OS/apps; clear caches.',
        'Disable suspect apps; test in safe mode.',
        'Run hardware diagnostics.',
        'Reset network settings if needed.',
      ],
    },
    'phone-overheating': {
      description:
        'Identify why your phone overheats and apply cooling strategies, workload controls, firmware updates, and charging best practices. Persistent heat damages batteries and throttles performance—act early for longevity.',
      sections: [
        {
          title: 'Causes',
          items: [
            'Excessive CPU/GPU workloads from games, video rendering, or camera processing generate sustained heat that triggers thermal throttling.',
            'Charging while running heavy apps forces heat from both the battery and compute units, compounding thermal stress.',
            'Poor ventilation, pocket carry, or direct sunlight exposure traps heat and prevents normal dissipation.',
            'Background processes and malware create constant resource usage, heating the device even when idle.',
          ],
        },
        {
          title: 'Mitigation',
          items: [
            'Pause heavy tasks immediately and let the device cool to safe temperature. Avoid heavy use during charging.',
            'Remove thick cases and place the phone on a hard, ventilated surface to enhance passive cooling.',
            'Close background apps and disable non‑essential services such as hotspot, high‑rate GPS, and constant Bluetooth scanning.',
            'Lower screen brightness, reduce refresh rate if available, and limit camera use to short bursts.',
          ],
        },
        {
          title: 'Charging',
          items: [
            'Avoid charging during intensive use; separate charging and heavy workloads to reduce heat accumulation.',
            'Use certified chargers and cables to ensure proper voltage regulation and lower wasted heat.',
            'Prefer slower charging profiles if heat persists or in very hot environments.',
            'Keep battery between roughly 20–80% for longevity and thermal stability under typical usage.',
          ],
        },
        {
          title: 'Diagnostics',
          items: [
            'Check battery temperature readings in device diagnostics or reputable monitoring apps; note ranges during typical tasks.',
            'Review CPU/GPU usage via developer options or monitoring tools to identify runaway processes or thermal hotspots.',
            'Scan for malware and remove suspicious profiles that may force background computation or disable power saving.',
            'Update OS and firmware to benefit from thermal management improvements and driver fixes.',
          ],
        },
        {
          title: 'Environment',
          items: [
            'Avoid direct sunlight and high ambient temperatures; store devices in shaded, ventilated areas.',
            'Do not leave phones on dashboards or near heat sources; thermal runaway risks increase rapidly.',
          ],
        },
        {
          title: 'Profiles and Limits',
          items: [
            'Use battery saver or performance limiter modes during prolonged tasks to cap heat generation.',
            'Reduce camera recording resolution and frame rates for long sessions.',
          ],
        },
        {
          title: 'Hardware Health',
          items: [
            'Inspect battery health and swelling; replace degraded batteries promptly.',
            'Clean charging ports; debris can cause resistance and heating during charge.',
          ],
        },
        {
          title: 'Post‑Incident Care',
          items: [
            'If overheating events occur, allow full cooldown before reuse; avoid immediate recharging.',
            'Log incidents to identify patterns tied to apps, locations, or accessories.',
          ],
        },
        {
          title: 'Accessories and Cases',
          items: [
            'Prefer slim, ventilated cases; thick or insulated cases trap heat and slow dissipation.',
            'Avoid metal plates and magnetic mounts that interfere with antenna efficiency and raise heat.',
          ],
        },
        {
          title: 'Developer Options',
          items: [
            'Use performance overlays and CPU usage indicators to spot runaway tasks during heat events.',
            'Disable background scanning and aggressive logging while testing to reduce overhead.',
          ],
        },
      ],
      checklist: [
        'Stop heavy workloads; remove case.',
        'Cool down before charging.',
        'Update OS; scan for malware.',
        'Monitor battery temperature.',
      ],
    },
    'battery-draining': {
      description:
        'Reduce excessive battery drain by controlling background activity, radio usage, screen power, and app behavior. Combine quick wins with thoughtful habits to restore all‑day battery life.',
      sections: [
        {
          title: 'Find Drainers',
          items: [
            'Open battery usage stats and identify top apps consuming power disproportionately relative to your usage.',
            'Note poor signal areas where radios operate at high transmit power, leading to accelerated drain.',
            'Look for frequent wakeups from notifications and background sync; excessive alerts keep the CPU active.',
            'Detect location services overuse by navigation and social apps; fine‑tune permissions and update intervals.',
          ],
        },
        {
          title: 'Optimize',
          items: [
            'Enable battery saver and adaptive battery features to automatically limit power hungry behaviors.',
            'Restrict background data and activity for the worst offenders; tune sync windows to reduce constant wakeups.',
            'Reduce screen brightness and shorten display timeout. The screen is a primary consumer during active use.',
            'Disable 5G where coverage is weak and prefer 4G for balanced performance and power.',
          ],
        },
        {
          title: 'System',
          items: [
            'Update OS and apps for battery fixes and performance improvements.',
            'Disable unnecessary widgets and live wallpapers that constantly redraw and wake hardware.',
            'Turn off always‑on display if supported to cut idle screen power when not required.',
            'Limit auto‑sync intervals and reduce push notification scope to essentials only.',
          ],
        },
        {
          title: 'Charging Habits',
          items: [
            'Avoid deep discharges that stress lithium‑ion chemistry and reduce lifespan.',
            'Use certified chargers and cables to minimize heat and ensure proper charging curves.',
            'Aim to keep the battery between about 20–80% for daily use to balance convenience with longevity.',
            'Avoid overnight charging in high ambient temperatures; heat accelerates aging while at high state of charge.',
          ],
        },
        {
          title: 'Radio Strategy',
          items: [
            'Prefer Wi‑Fi over mobile data for heavy tasks when stable; radios consume differently under load.',
            'Disable 5G in poor coverage areas to avoid constant reselection and higher transmit power.',
          ],
        },
        {
          title: 'Notifications Hygiene',
          items: [
            'Mute non‑essential notifications; excessive wake events keep the CPU active.',
            'Consolidate messaging apps and reduce duplicate alerts across platforms.',
          ],
        },
        {
          title: 'App‑Specific Energy',
          items: [
            'Identify apps with poor energy behavior using battery usage breakdowns; replace or limit them.',
            'Disable autoplay and background prefetch in social and news apps.',
          ],
        },
        {
          title: 'System Services',
          items: [
            'Review location services accuracy settings; choose battery‑saving modes when precise tracking is unnecessary.',
            'Disable always‑on display and reduce widget count to minimize constant rendering.',
          ],
        },
        {
          title: 'Weekly Audits',
          items: [
            'Schedule weekly reviews of battery stats to catch regressions after updates.',
            'Update or remove newly installed apps that show disproportionate drain.',
          ],
        },
        {
          title: 'Travel and Roaming',
          items: [
            'Disable background sync and heavy auto‑updates before travel to avoid drain under poor coverage.',
            'Use local SIMs or roaming bundles to stabilize radio behavior and reduce attach retries.',
          ],
        },
      ],
      checklist: [
        'Identify top drainers.',
        'Enable battery saver.',
        'Reduce screen power.',
        'Restrict background activity.',
      ],
    },
    'storage-full': {
      description:
        'Free up space thoroughly by cleaning large media and app caches, offloading to cloud or SD, and preventing reaccumulation with smarter defaults. Maintain storage health to keep performance stable.',
      sections: [
        {
          title: 'Clean Up',
          items: [
            'Delete large videos and duplicate photos using a trusted gallery manager. Focus first on the largest files for quick wins.',
            'Clear caches for social media and browser apps. These caches grow quickly and rarely need to be kept indefinitely.',
            'Remove old downloads and APK installers you no longer need. Installation artifacts often remain unnoticed.',
            'Uninstall rarely used applications to reclaim both app binaries and associated data directories.',
          ],
        },
        {
          title: 'Offload',
          items: [
            'Enable cloud backup for photos and documents and verify completed uploads before deleting local copies.',
            'Move media to an SD card if supported. Keep frequently accessed content local and archive bulk material externally.',
            'Use a desktop to archive large files with structured folder naming so you can find them later.',
            'Compress or transcode high‑bitrate videos to smaller formats to preserve content while cutting size.',
          ],
        },
        {
          title: 'Prevent',
          items: [
            'Disable auto‑download of media in messaging apps to prevent silent accumulation of large files.',
            'Limit app cache growth via in‑app or OS settings where available; some platforms allow caps.',
            'Prefer streaming for rarely rewatched content instead of maintaining large offline libraries.',
            'Set storage alerts and review usage monthly to prevent creeping bloat.',
          ],
        },
        {
          title: 'Integrity',
          items: [
            'Run storage analysis tools and check for warnings or corruption indicators. Address filesystem errors promptly.',
            'Repair the file system if errors are reported. Back up before repairs or mass deletions to avoid data loss.',
            'Back up important data before major cleanups. Confirm restore paths are valid.',
            'Verify cloud sync completion after changes to prevent orphaned or partial backups.',
          ],
        },
        {
          title: 'Gallery Management',
          items: [
            'Use tools to detect duplicates, near‑duplicates, and large media; curate aggressively.',
            'Create albums and archive older events to external storage or cloud.',
          ],
        },
        {
          title: 'Messaging Media Control',
          items: [
            'Disable auto‑download for large media and documents in messaging apps.',
            'Periodically clean chat attachments folders; they accumulate silently.',
          ],
        },
        {
          title: 'Cache Policies',
          items: [
            'Adjust app cache max sizes where supported; some apps allow fine‑grained control.',
            'Clear browser and streaming caches after heavy usage periods.',
          ],
        },
        {
          title: 'SD Card Maintenance',
          items: [
            'Format SD cards periodically with verified settings to prevent fragmentation and corruption.',
            'Avoid mixing app data and media on removable storage when stability is critical.',
          ],
        },
        {
          title: 'Temporary Files',
          items: [
            'Clear temp folders created by editors, compressors, and messaging apps after large operations.',
            'Use cleanup tools to remove orphaned partial downloads and update leftovers.',
          ],
        },
        {
          title: 'App Data Management',
          items: [
            'Review per‑app storage usage; delete offline content you no longer need.',
            'Reset cache‑heavy apps periodically to prevent reaccumulation beyond healthy limits.',
          ],
        },
      ],
      checklist: [
        'Clear caches and downloads.',
        'Delete duplicates and large media.',
        'Offload to cloud or SD.',
        'Disable auto‑downloads.',
      ],
    },
    'router-setup': {
      description:
        'Configure home routers for reliable, secure Wi‑Fi. This covers SSIDs, encryption, channel planning, band management, WAN and DNS, QoS tuning, and routine maintenance so your network remains stable under real‑world loads.',
      sections: [
        {
          title: 'Basics',
          items: [
            'Change the default router admin password and rename SSIDs to avoid advertising the model or defaults.',
            'Set WPA2 or WPA3 encryption and avoid legacy WEP. Use strong passphrases to deter brute force attacks.',
            'Disable WPS to eliminate a common attack vector and reduce misconfiguration risks.',
            'Create a separate guest network with limited bandwidth and no access to internal devices.',
          ],
        },
        {
          title: 'Channels and Bands',
          items: [
            'Use non‑overlapping 2.4 GHz channels (1, 6, 11) to reduce collisions with neighbors.',
            'Prefer 5 GHz for high‑throughput and low‑latency devices; reserve 2.4 GHz for range and IoT.',
            'Disable Smart Connect if band steering causes misassociation. Separate SSIDs allow manual control.',
            'Place the router centrally, elevate it, and avoid obstructions to create even coverage.',
          ],
        },
        {
          title: 'WAN and DNS',
          items: [
            'Verify ISP WAN settings (PPPoE or DHCP) and ensure authentication credentials are correct to avoid intermittent drops.',
            'Set DNS to reliable resolvers (1.1.1.1 or 8.8.8.8) and consider DoT/DoH where compatible and stable.',
            'Check NAT type and avoid double‑NAT by enabling bridge mode on upstream devices where possible.',
            'Configure port forwarding explicitly for self‑hosted services and test reachability from the internet.',
          ],
        },
        {
          title: 'QoS and Performance',
          items: [
            'Prioritize work devices during calls and conferences to maintain audio/video quality under load.',
            'Limit bandwidth hogs with per‑device caps or schedules for bulk downloads and streaming.',
            'Enable MU‑MIMO and beamforming if supported to improve multi‑client performance and coverage.',
            'Use traffic shaping to prevent bufferbloat and ensure consistent latency during heavy uploads.',
          ],
        },
        {
          title: 'Maintenance',
          items: [
            'Update firmware regularly to patch security issues and improve stability.',
            'Backup router configuration after major changes for quick recovery.',
            'Monitor logs for WAN drops or authentication retries that indicate line issues.',
            'If stability improves after reboots, schedule periodic maintenance reboots during off‑hours.',
          ],
        },
        {
          title: 'Guest and IoT Segmentation',
          items: [
            'Place guest devices on an isolated SSID with bandwidth limits and no LAN access.',
            'Segment IoT devices to reduce lateral movement risks and contain misbehavior.',
          ],
        },
        {
          title: 'Firewall and Parental Controls',
          items: [
            'Enable basic firewall features and block known malicious domains via DNS filtering.',
            'Use parental controls to schedule access and restrict inappropriate categories.',
          ],
        },
        {
          title: 'Monitoring',
          items: [
            'Track device associations, RSSI, and throughput to detect weak links and optimize placement.',
            'Export logs periodically for deeper analysis of intermittent issues.',
          ],
        },
      ],
      checklist: [
        'Secure admin and SSIDs.',
        'Tune channels and bands.',
        'Set DNS; check NAT.',
        'Enable QoS; update firmware.',
      ],
    },
    'cloud-storage': {
      description:
        'Manage cloud storage reliably: fix sync issues, organize shared workspaces, secure accounts and links, and plan storage tiers with selective sync. This prevents silent failures and protects critical files.',
      sections: [
        {
          title: 'Sync Reliability',
          items: [
            'Ensure stable connectivity and sufficient local free space so sync can complete without stalls.',
            'Pause and resume sync to reset stuck transfers. This often clears internal queue deadlocks.',
            'Clear client caches and reauthenticate if credentials expired or tokens were revoked.',
            'Watch for conflict dialogs and resolve duplicates by choosing authoritative sources.',
          ],
        },
        {
          title: 'Organization',
          items: [
            'Adopt consistent folder naming and hierarchy so collaborators find content predictably.',
            'Avoid nested sync folders that create loops and excessive duplication across clients.',
            'Archive old projects to cold or offline storage tiers to reduce sync churn.',
            'Leverage shared drives with granular permissions instead of ad hoc link sharing.',
          ],
        },
        {
          title: 'Security',
          items: [
            'Enable two‑factor authentication and review recovery options. Strong authentication prevents unauthorized access.',
            'Review app access and revoke unused integrations that retain token permissions.',
            'Encrypt sensitive archives before upload to reduce impact if a link leaks.',
            'Audit sharing links periodically and set expirations to limit unintended exposure.',
          ],
        },
        {
          title: 'Storage Planning',
          items: [
            'Monitor quota and upgrade tiers based on real growth rather than short spikes.',
            'Use selective sync to keep only active projects locally and reduce local disk pressure.',
            'Compress large datasets for archival purposes and document restoration procedures.',
            'Define retention policies so teams know what must be kept, for how long, and where.',
          ],
        },
        {
          title: 'Ransomware Readiness',
          items: [
            'Enable version history and immutable backups where available to recover from malicious encryption.',
            'Train teams to recognize suspicious links and attachments that target cloud sync clients.',
          ],
        },
        {
          title: 'Shared Drive Governance',
          items: [
            'Define folder ownership, contributor roles, and review cycles to prevent permission sprawl.',
            'Use group‑based access controls rather than ad hoc user lists.',
          ],
        },
        {
          title: 'Multi‑Cloud Strategy',
          items: [
            'Distribute risk by keeping critical archives in a secondary provider with distinct credentials.',
            'Test restoration cross‑provider to ensure portability.',
          ],
        },
      ],
      checklist: [
        'Fix connectivity; clear client cache.',
        'Resolve conflicts; reauth if needed.',
        'Enable 2FA; audit sharing.',
        'Plan storage tiers and selective sync.',
      ],
    },
    'error-codes': {
      description:
        'Resolve application errors and login issues with a methodical approach to HTTP statuses, OS prompts, 2FA problems, account locks, and official recovery flows. This reduces guesswork and shortens time to resolution.',
      sections: [
        {
          title: 'HTTP Statuses',
          items: [
            'Treat 4xx codes as client-side issues: recheck credentials, payload formatting, headers, and authorization scopes.',
            'Treat 5xx codes as server-side problems: retry with backoff, monitor status pages, and avoid hammering endpoints.',
            'Handle 429 rate limits by adopting exponential backoff and respecting published quotas to prevent bans.',
            'Investigate 403 forbidden by verifying user roles, group memberships, and resource ACLs in the target system.',
          ],
        },
        {
          title: 'Login and 2FA',
          items: [
            'Verify device time sync for OTP generation; skew causes invalid codes. Re‑sync time automatically if possible.',
            'Retrieve backup codes and confirm recovery email or phone are accessible for account unlock.',
            'Disable VPN temporarily if geo‑blocking or IP reputation issues interfere with login flows.',
            'Clear cookies and test in incognito/private mode to rule out stale sessions and corrupted browser state.',
          ],
        },
        {
          title: 'OS and App Errors',
          items: [
            'Update the app and clear its cache/data to reset local storage and eliminate corrupted state.',
            'Reinstall the app when corruption is suspected or after major OS updates to refresh binaries and libraries.',
            'Check storage availability and permissions so the app can persist sessions, logs, and required files.',
            'Review device date/time and region settings; mismatches can break cryptographic handshakes and token validation.',
          ],
        },
        {
          title: 'Account Recovery',
          items: [
            'Use official recovery flows provided by the service to avoid scams and data loss.',
            'Provide proof of identity where required and follow documented steps to regain access.',
            'Avoid third‑party “unlock” tools that promise shortcuts; these often cause permanent locks or compromise data.',
            'Escalate via official support channels with logs, error codes, and timestamps to accelerate diagnosis.',
          ],
        },
        {
          title: 'Certificate and TLS Errors',
          items: [
            'Check system date/time and certificate stores; skew breaks TLS handshakes.',
            'Reinstall apps that ship pinned certificates if validation fails unexpectedly.',
          ],
        },
        {
          title: 'DNS and Resolver Errors',
          items: [
            'Switch to reliable DNS resolvers and flush caches; test direct IP connections to isolate DNS problems.',
            'Disable encrypted DNS temporarily if middleboxes interfere with DoH/DoT.',
          ],
        },
        {
          title: 'Payment and Checkout Errors',
          items: [
            'Capture gateways’ error codes, retry with clean sessions, and verify OTP/3DS flows.',
            'Contact merchant support with references and screenshots when debits occur without value.',
          ],
        },
        {
          title: 'Logs and Evidence',
          items: [
            'Collect timestamps, device OS/app versions, and screenshots of prompts and errors.',
            'Provide concise reproduction steps to engineers for faster triage.',
          ],
        },
      ],
      checklist: [
        'Identify status class (4xx/5xx).',
        'Fix login and 2FA basics.',
        'Clear app data; update.',
        'Use official recovery and escalate.',
      ],
    },
    'whatsapp-hacked': {
      description:
        'Recover a compromised WhatsApp account quickly and methodically. Prioritize account control, message confidentiality, and device hygiene while coordinating with carriers and contacts to minimize harm.',
      sections: [
        {
          title: 'Immediate Containment',
          items: [
            'If you are still signed in on any device, open WhatsApp and revoke all linked devices from Settings > Linked Devices. This terminates active sessions elsewhere.',
            'Notify close contacts via alternate channels that your account is compromised. Ask them to ignore unusual requests involving money or sensitive information.',
            'If you lost access, attempt account re‑verification using your phone number. Enter the 6‑digit code received by SMS or call. Do not share this code with anyone.',
            'Enable two‑step verification (6‑digit PIN) immediately after regaining access. Add a recovery email to prevent lockouts.',
          ],
        },
        {
          title: 'SIM Swap and Carrier Coordination',
          items: [
            'Contact your mobile carrier to check for SIM swap activity. Unauthorized swaps allow attackers to intercept WhatsApp verification codes.',
            'Ask your carrier to place a SIM swap lock or additional verification on your line. Provide identification as required.',
            'If your SIM is missing or unresponsive, request an immediate SIM replacement and re‑register WhatsApp with the restored number.',
          ],
        },
        {
          title: 'Device Hygiene',
          items: [
            'Scan devices for malware. Remove suspicious apps and unknown configuration profiles that could intercept notifications or manipulate network settings.',
            'Update OS and WhatsApp to the latest version. Security patches close known vulnerabilities that attackers exploit.',
            'Review notification previews and lock‑screen exposure. Limit sensitive information that can be read without unlocking your phone.',
          ],
        },
        {
          title: 'Privacy and History',
          items: [
            'Change privacy settings for profile photo, last seen, and groups to reduce exposure to unknown accounts.',
            'Review group membership and exit any unknown or risky groups added during the compromise.',
            'Consider clearing sensitive chat histories or exporting important threads securely before cleanup.',
          ],
        },
        {
          title: 'Escalation and Support',
          items: [
            'Use the in‑app support or WhatsApp official help channels to report the compromise and request assistance where needed.',
            'Collect timestamps, verification prompts, carrier interactions, and device logs to support any investigation.',
            'If financial loss occurred, coordinate with your bank and file a report to the appropriate authorities.',
          ],
        },
        {
          title: 'Communication Plan',
          items: [
            'Draft a short message to broadcast to contacts clarifying the incident and asking them to ignore unusual requests.',
            'Update status or profile temporarily to warn new contacts until stability is confirmed.',
          ],
        },
        {
          title: 'Post‑Incident Hardening',
          items: [
            'Rotate device unlock codes and review notification preview policies.',
            'Enable two‑step verification PIN reminders and store recovery email securely.',
          ],
        },
        {
          title: 'Regional Guidance',
          items: [
            'Verify local carrier policies regarding SIM swap locks and identity re‑verification.',
            'Use official USSD or apps to check line status after recovery.',
          ],
        },
        {
          title: 'Evidence Archive',
          items: [
            'Export chat logs that may contain evidence and store securely off device.',
            'Keep a timeline of events to assist support or law enforcement.',
          ],
        },
        {
          title: 'Recovery Timeline',
          items: [
            'Plan staged checks over a week: session review, privacy settings audit, and contact confirmations.',
            'Monitor for residual anomalies like unknown group additions or sudden verification prompts.',
          ],
        },
      ],
      checklist: [
        'Reverify number and enable two‑step PIN.',
        'Revoke linked devices; notify contacts.',
        'Check for SIM swap; lock line.',
        'Scan devices; remove suspicious apps.',
      ],
    },
    'account-banned': {
      description:
        'Prepare a clear, policy‑aware appeal to restore banned social media accounts. Document event context, acknowledge relevant rules, and provide evidence of compliance or remediation.',
      sections: [
        {
          title: 'Understand the Ban',
          items: [
            'Read the ban notification carefully and identify cited policies or community guidelines. Note timestamps and any recent content changes.',
            'Review your recent posts, comments, and messages for potential violations. Consider context such as satire vs misinformation, fair use vs infringement, or harassment vs moderation misfires.',
          ],
        },
        {
          title: 'Evidence and Remediation',
          items: [
            'Collect URLs, screenshots, and post IDs of disputed content. Provide detailed explanations and intent.',
            'Remove or edit problematic content proactively if allowed, showing good faith and awareness of platform norms.',
            'Describe steps taken to prevent recurrence: moderation filters, link checking, source verification, and team guidelines.',
          ],
        },
        {
          title: 'Formal Appeal',
          items: [
            'Use the platform’s official appeal form. Write in a professional tone and map your points to specific policies.',
            'Acknowledge mistakes where applicable and demonstrate corrective actions. Platforms respond better to constructive plans than denial.',
            'Provide contact information and request a human review where automated moderation may have misclassified content.',
          ],
        },
        {
          title: 'Ongoing Compliance',
          items: [
            'Establish internal content standards and approval workflows for sensitive topics.',
            'Use trusted sources and cite references to reduce misinformation flags.',
            'Monitor account health dashboards and proactively remove borderline posts.',
          ],
        },
        {
          title: 'Policy Mapping',
          items: [
            'Map each appeal point to specific policy clauses and provide neutral, factual context.',
            'Reference prior compliant posts to demonstrate intent and history.',
          ],
        },
        {
          title: 'Content Review Process',
          items: [
            'Establish pre‑publication checks for sensitive topics and external links.',
            'Use internal reviewers or checklists to reduce accidental violations.',
          ],
        },
        {
          title: 'Community Signals',
          items: [
            'Encourage followers to report impersonation or misuse quickly.',
            'Collect community feedback to refine tone and reduce misinterpretation.',
          ],
        },
        {
          title: 'Compliance Toolkit',
          items: [
            'Adopt link checkers, copyright scanners, and source verification workflows.',
            'Maintain a repository of approved references for recurring topics.',
          ],
        },
        {
          title: 'Post‑Restoration Monitoring',
          items: [
            'Track account warnings and health metrics after restoration to catch residual issues.',
            'Document internal lessons learned and update team guidelines.',
          ],
        },
      ],
      checklist: [
        'Identify cited policies.',
        'Collect evidence and context.',
        'Submit a structured appeal.',
        'Implement prevention measures.',
      ],
    },
    'facebook-locked': {
      description:
        'Regain access to a locked Facebook account by confirming identity, addressing security flags, and stabilizing login signals. Proceed step‑wise and document outcomes.',
      sections: [
        {
          title: 'Initial Steps',
          items: [
            'Attempt login from a recognized device and location to trigger familiar signals. Avoid VPN during recovery.',
            'Use “Forgot Password” with recovery email or phone. Retrieve codes promptly and avoid multiple failed attempts.',
            'Check for “Confirm Your Identity” prompts and prepare government ID, profile details, and known contact lists as requested.',
          ],
        },
        {
          title: 'Security Checkup',
          items: [
            'Once inside, run Security Checkup to log out of suspicious sessions and enable two‑factor authentication.',
            'Update recovery email/phone, remove outdated contacts, and review trusted devices.',
            'Revoke third‑party app access that you no longer use to reduce attack surfaces.',
          ],
        },
        {
          title: 'If Recovery Fails',
          items: [
            'Use Facebook’s identity confirmation form with clear photos of your ID and accurate profile ownership details.',
            'Provide evidence of account ownership, such as unique posts or contacts recognizable by support.',
            'Wait for human review and avoid repeated submissions that could delay processing.',
          ],
        },
        {
          title: 'Signal Stabilization',
          items: [
            'Attempt login from a consistent device and IP without VPN to present familiar signals.',
            'Avoid rapid retries; spaced attempts reduce risk flags.',
          ],
        },
        {
          title: 'Identity Docs Prep',
          items: [
            'Prepare high‑quality scans of IDs and ensure names and dates match your profile data.',
            'Collect utility bills or secondary documents if the platform accepts them for verification.',
          ],
        },
        {
          title: 'Support Escalation',
          items: [
            'Record case numbers and maintain a concise log of steps and responses.',
            'Escalate politely with new evidence rather than restating prior messages.',
          ],
        },
        {
          title: 'Aftercare',
          items: [
            'Enable advanced authentication, review trusted devices, and set alerts for unusual logins.',
            'Audit connected apps and remove historic integrations you no longer use.',
          ],
        },
      ],
      checklist: [
        'Use recognized device/location.',
        'Reset password; enable 2FA.',
        'Complete identity confirmation.',
        'Revoke suspicious sessions/apps.',
      ],
    },
    'scams-fraud': {
      description:
        'Identify and report online scams confidently. Learn to dissect offers, validate identities, preserve evidence, and notify the correct channels swiftly to protect yourself and others.',
      sections: [
        {
          title: 'Recognize Patterns',
          items: [
            'Be wary of urgency, guaranteed returns, unverified escrow, or requests for upfront fees for jobs and grants.',
            'Look for mismatched branding, inconsistent grammar, cloned websites, and newly created social accounts with aggressive DMs.',
          ],
        },
        {
          title: 'Validate Identity',
          items: [
            'Check domain age, SSL, and registrant data. Compare official contact details to those provided in the offer.',
            'Request verifiable references and official documentation. Call known official numbers rather than those provided in messages.',
          ],
        },
        {
          title: 'Preserve Evidence',
          items: [
            'Take screenshots of messages, profiles, payment requests, and transaction IDs.',
            'Record dates, usernames, phone numbers, and any bank details. Evidence expedites investigations.',
          ],
        },
        {
          title: 'Report',
          items: [
            'Report to the platform (social networks, marketplaces) to suspend the scammer’s account.',
            'Notify your bank for fraudulent transfers and request chargeback or dispute procedures.',
            'Escalate to local authorities or cybercrime units according to national guidance.',
          ],
        },
        {
          title: 'Payment Safety',
          items: [
            'Prefer escrow on reputable platforms; avoid direct transfers to unknown parties.',
            'Use strong multi‑factor authentication on banking apps and disable risky auto‑forwarding email rules.',
          ],
        },
        {
          title: 'Education and Outreach',
          items: [
            'Share verified warnings within community groups to prevent others from falling prey.',
            'Encourage critical evaluation of offers and provide checklists for safe engagement.',
          ],
        },
        {
          title: 'Recovery Steps',
          items: [
            'If funds were lost, document transaction IDs and contact your bank immediately for dispute options.',
            'Preserve communications intact for investigations; avoid confronting scammers directly.',
          ],
        },
        {
          title: 'International Considerations',
          items: [
            'Check cross‑border jurisdiction limits and report through appropriate channels when scams involve foreign entities.',
            'Avoid sending identity documents to unknown “verification” email addresses.',
          ],
        },
      ],
      checklist: [
        'Identify red flags.',
        'Validate domains and contacts.',
        'Preserve all evidence.',
        'Report to platforms/banks/authorities.',
      ],
    },
    'pos-fraud': {
      description:
        'Avoid POS fraud and card skimming with disciplined device checks, transaction hygiene, reconciliation, and dispute readiness. Merchants and customers both play crucial roles.',
      sections: [
        {
          title: 'Device Hygiene',
          items: [
            'Inspect POS terminals for overlays, loose parts, or unusual attachments that hide skimming hardware.',
            'Ensure firmware is updated and sourced from the official provider. Avoid unknown maintenance technicians.',
          ],
        },
        {
          title: 'Transaction Safety',
          items: [
            'Keep cards within sight and avoid handing them out of view. Verify the amount before approving.',
            'Use chip and PIN where available; avoid magstripe-only transactions which are easier to skim.',
            'Enable transaction alerts and review statements frequently for anomalies.',
          ],
        },
        {
          title: 'Reconciliation and Disputes',
          items: [
            'Maintain daily reconciliation logs and cross‑check terminal batch totals with bank deposits.',
            'For unauthorized debits, contact the acquiring bank, provide terminal IDs, transaction timestamps, and receipts.',
            'Document CCTV footage and staff rosters for investigative audits.',
          ],
        },
        {
          title: 'Customer Habits',
          items: [
            'Shield PIN entry and avoid distractions during transactions.',
            'Decline assistance from unknown bystanders; verify staff uniforms and IDs.',
          ],
        },
        {
          title: 'Merchant Policies',
          items: [
            'Define terminal custody, maintenance logs, and access control to prevent tampering.',
            'Train staff to recognize overlays and report anomalies immediately.',
          ],
        },
        {
          title: 'Evidence Retention',
          items: [
            'Archive receipt copies, batch reports, and error logs for at least 6–12 months.',
            'Retain surveillance snapshots tied to suspect transactions for investigators.',
          ],
        },
        {
          title: 'Dispute Process',
          items: [
            'Follow acquiring bank dispute timelines and provide complete documentation to avoid rejections.',
            'Escalate unresolved disputes with case references and chronological evidence.',
          ],
        },
      ],
      checklist: [
        'Inspect terminals regularly.',
        'Use chip/PIN; verify amounts.',
        'Enable alerts; reconcile daily.',
        'Escalate with full transaction data.',
      ],
    },
    'unknown-debit': {
      description:
        'Respond to unauthorized debit alerts by rapidly identifying the source, stopping further loss, and executing formal disputes. Preserve evidence and maintain communication with your bank.',
      sections: [
        {
          title: 'Immediate Actions',
          items: [
            'Freeze the card or block the channel via your banking app or hotline. Prevent additional transactions.',
            'Change online banking passwords and revoke trusted device access. Enable stronger authentication.',
          ],
        },
        {
          title: 'Identify the Charge',
          items: [
            'Review transaction details: merchant name, location, time, and descriptor codes. Some descriptors differ from storefront names.',
            'Check for subscriptions or trial conversions you may have forgotten. Cancel and request refunds where applicable.',
          ],
        },
        {
          title: 'Dispute and Evidence',
          items: [
            'Contact your bank to raise a formal dispute. Provide timestamps, amounts, screenshots, and communications with the merchant.',
            'File a police report for significant losses and request case numbers. Banks may require official documentation.',
          ],
        },
        {
          title: 'Channel Isolation',
          items: [
            'Disable risky channels (international, online, contactless) temporarily while investigating.',
            'Replace compromised cards and re‑enroll trusted devices cautiously.',
          ],
        },
        {
          title: 'Merchant Communication',
          items: [
            'Contact the merchant using official channels; request details of the transaction and refund policies.',
            'Avoid sharing sensitive data; provide only necessary descriptors and case numbers.',
          ],
        },
        {
          title: 'Monitoring',
          items: [
            'Enable real‑time alerts and set threshold notifications for unusual amounts or new payees.',
            'Review statements over prior months for patterns and linked suspicious charges.',
          ],
        },
        {
          title: 'Prevention',
          items: [
            'Use virtual cards for online purchases and unique cards per service when possible.',
            'Avoid storing card details with merchants lacking robust security reputations.',
          ],
        },
      ],
      checklist: [
        'Freeze card or channel.',
        'Change passwords; enable 2FA.',
        'Identify merchant/descriptors.',
        'File dispute with evidence.',
      ],
    },
    'data-privacy': {
      description:
        'Secure your personal data with layered defenses: strong authentication, careful permissions, encryption, privacy settings, breach readiness, and routine audits across devices and accounts.',
      sections: [
        {
          title: 'Account Security',
          items: [
            'Use a password manager and unique passwords for each site. Enable 2FA everywhere possible.',
            'Rotate backup codes and store them offline. Remove outdated recovery methods.',
          ],
        },
        {
          title: 'Device Hygiene',
          items: [
            'Keep OS and apps updated. Remove abandoned apps that retain broad permissions.',
            'Audit app permissions (camera, mic, location) and revoke non‑essential access to reduce surveillance risks.',
          ],
        },
        {
          title: 'Data Controls',
          items: [
            'Encrypt sensitive archives and use end‑to‑end encrypted messengers for private conversations.',
            'Review privacy settings on social networks and limit public exposure of profile details and posts.',
          ],
        },
        {
          title: 'Breach Readiness',
          items: [
            'Enable breach alerts and monitor for credential leaks. Change passwords promptly when leaks are detected.',
            'Keep incident response notes: who to contact, what to rotate, and how to revoke tokens across services.',
          ],
        },
        {
          title: 'Data Minimization',
          items: [
            'Limit the data you share with services to essentials. Avoid optional fields that increase exposure.',
            'Delete old accounts and revoke unused app authorizations to reduce your overall attack surface.',
          ],
        },
        {
          title: 'Secure Sharing',
          items: [
            'Use expiring links and access‑controlled folders for sensitive documents.',
            'Avoid sending identity documents over email; prefer verified portals with encryption.',
          ],
        },
        {
          title: 'Privacy Tools',
          items: [
            'Adopt tracker blockers, private DNS, and hardened browser profiles for sensitive tasks.',
            'Use encrypted cloud storage for backups; verify provider security features.',
          ],
        },
        {
          title: 'Audit Schedule',
          items: [
            'Run quarterly privacy audits: permissions, recovery methods, exposed posts, and data exports.',
            'Record findings and remediate promptly; track improvements over time.',
          ],
        },
      ],
      checklist: [
        'Enable 2FA everywhere.',
        'Audit permissions routinely.',
        'Encrypt and limit sharing.',
        'Maintain breach response plan.',
      ],
    },
    'account-hacked': {
      description:
        'A general playbook for compromised accounts across platforms. Focus on regaining control, revoking sessions, rotating credentials, and communicating clearly to reduce damage.',
      sections: [
        {
          title: 'Regain Access',
          items: [
            'Use official recovery flows with verified email/phone. Avoid third‑party tools.',
            'If MFA apps are unavailable, use backup codes or recovery contacts provided by the platform.',
          ],
        },
        {
          title: 'Revoke and Rotate',
          items: [
            'Log out all sessions, revoke API tokens, and remove unknown connected apps.',
            'Change passwords and update recovery methods. Enable 2FA immediately.',
          ],
        },
        {
          title: 'Hygiene and Communication',
          items: [
            'Scan devices for malware and remove suspicious extensions or profiles.',
            'Notify contacts about the incident and ask them to ignore unusual requests.',
          ],
        },
        {
          title: 'Evidence and Escalation',
          items: [
            'Collect timestamps, IP addresses, and platform notices. Provide these to support for investigation.',
            'If funds or sensitive data were compromised, file formal reports with banks and relevant authorities.',
          ],
        },
        {
          title: 'Post‑Recovery Hardening',
          items: [
            'Review privacy settings, notification previews, and sharing scopes across platforms.',
            'Enable login alerts and set up backup authentication methods cleanly.',
          ],
        },
        {
          title: 'Legal Follow‑up',
          items: [
            'If identity theft occurred, file official reports and maintain case numbers.',
            'Consult consumer protection resources for guidance on remediation.',
          ],
        },
        {
          title: 'Monitoring',
          items: [
            'Track account activity for a week after recovery to catch residual access.',
            'Rotate keys and tokens for integrations and third‑party apps.',
          ],
        },
      ],
      checklist: [
        'Recover via official flows.',
        'Revoke sessions/tokens.',
        'Rotate passwords; enable 2FA.',
        'Preserve evidence; escalate.',
      ],
    },
    verification: {
      description:
        'Determine whether a website, business, or offer is legitimate using structured checks: domain, SSL, ownership, reputational signals, and transactional safeguards before committing.',
      sections: [
        {
          title: 'Domain and SSL',
          items: [
            'Verify HTTPS and valid certificates. Check for HSTS and modern TLS configurations where possible.',
            'Review domain age and registrar details. Recently created domains are more likely to be risky for financial transactions.',
          ],
        },
        {
          title: 'Ownership Signals',
          items: [
            'Look for consistent branding across official social accounts, apps, and press releases.',
            'Confirm physical addresses and phone numbers independently via known directories.',
          ],
        },
        {
          title: 'Reputation and Reviews',
          items: [
            'Search for third‑party reviews on trusted platforms. Beware of patterns of low‑effort, repeated phrases, and timing clusters.',
            'Investigate complaint histories and regulatory filings where applicable.',
          ],
        },
        {
          title: 'Transactional Safeguards',
          items: [
            'Prefer payment methods with buyer protection and chargeback rights.',
            'Avoid direct bank transfers or crypto unless trust is established via strong references and contracts.',
          ],
        },
        {
          title: 'Identity and Contracts',
          items: [
            'Request formal contracts and verify registered business identities with official registries.',
            'Confirm tax IDs and licensing where applicable to the industry.',
          ],
        },
        {
          title: 'Operational Checks',
          items: [
            'Test customer service response times via official channels before committing.',
            'Verify SLA terms and escalation paths for paid services.',
          ],
        },
        {
          title: 'Risk Flags',
          items: [
            'Treat pressure tactics and exclusive limited‑time offers as risk signals.',
            'Beware of mixed payment channels and non‑traceable methods.',
          ],
        },
      ],
      checklist: [
        'Validate SSL and domain age.',
        'Confirm ownership and contacts.',
        'Check independent reviews.',
        'Use protected payment methods.',
      ],
    },
    'tech-rights': {
      description:
        'Understand your digital rights around privacy, consent, data portability, takedowns, and due process. Use official channels and documentation to assert and protect these rights.',
      sections: [
        {
          title: 'Privacy and Consent',
          items: [
            'Know what data platforms collect and how consent is obtained. Opt‑out where possible.',
            'Use data export tools to review what services hold and correct inaccuracies.',
          ],
        },
        {
          title: 'Takedowns and Reporting',
          items: [
            'Use official takedown processes for defamation, impersonation, and copyright violations.',
            'Provide clear evidence and identify affected assets. Follow platform timelines and appeals.',
          ],
        },
        {
          title: 'Due Process',
          items: [
            'Request human reviews for automated actions where allowed. Ask for specifics on policy references.',
            'Document communications and maintain copies of submissions and decisions.',
          ],
        },
        {
          title: 'Security Expectations',
          items: [
            'Expect reasonable security from services storing your data. Report breaches promptly.',
            'Rotate credentials and revoke tokens after incidents. Request incident summaries when possible.',
          ],
        },
      ],
      checklist: [
        'Audit data and consent.',
        'File takedowns with evidence.',
        'Request human review.',
        'Record all decisions and incidents.',
      ],
    },
    'digital-payments': {
      description:
        'Troubleshoot digital payments and transfers with a disciplined approach covering rails, OTP and authentication, card declines, wallet errors, and settlement timing. Work methodically and preserve evidence for escalation.',
      sections: [
        {
          title: 'Establish Context',
          items: [
            'Identify payment rail: card (debit/credit), bank transfer, USSD, wallet, or gateway. Different rails fail for different reasons.',
            'Capture timestamps, merchant name, reference IDs, and device/app used. Consistent records enable banks and processors to trace transactions.',
          ],
        },
        {
          title: 'Authentication and OTP',
          items: [
            'Ensure your phone has signal and can receive OTP or push approvals. Delayed OTP often expires mid‑flow.',
            'Disable VPN if it triggers risk engines or geo‑blocks. Some gateways distrust anonymized IP ranges.',
            'Verify 3‑D Secure enrollment for cards where required. Mismatched enrollment leads to repeated authentication prompts and declines.',
          ],
        },
        {
          title: 'Card and Wallet Failures',
          items: [
            'For card declines, note the decline code or message. Distinguish insufficient funds from risk‑based declines.',
            'Check card status, spend limits, and online usage toggles in your banking app. Re‑enable online or foreign transactions when needed.',
            'For wallets, clear app cache, reauthenticate, and confirm KYC status. Incomplete KYC blocks certain transaction types.',
          ],
        },
        {
          title: 'Settlement and Posting',
          items: [
            'Understand that successful authorizations may still post later. Settlement delays vary by processor and bank.',
            'If a debit appears without value delivered, preserve receipts and screenshots. Contact the merchant and your bank concurrently.',
          ],
        },
        {
          title: 'Nigeria‑Specific',
          items: [
            'Monitor bank service announcements during peak periods. Rails may degrade temporarily under national volume spikes.',
            'Confirm dollar or foreign payments require appropriate card toggles and limits. Some banks gate FX transactions tightly.',
          ],
        },
      ],
      checklist: [
        'Identify rail and capture references.',
        'Verify OTP and 3‑D Secure.',
        'Check card/wallet status.',
        'Escalate with receipts and timestamps.',
      ],
    },
    'transfer-issues': {
      description:
        'Resolve pending transfers and reversals by verifying posting cycles, reconciling references, and initiating formal disputes when value is missing. Aim to separate delays from true failures.',
      sections: [
        {
          title: 'Confirm Status',
          items: [
            'Check transaction status in your banking app and request official reference IDs. “Processing” can be normal during posting windows.',
            'Contact the recipient bank to verify whether value was received but not yet visible. Provide references for cross‑bank tracing.',
          ],
        },
        {
          title: 'Evidence',
          items: [
            'Collect screenshots of debit alerts, transfer receipts, and any error prompts. Evidence accelerates investigation.',
            'Record exact timestamps, amounts, beneficiary details, and narration fields to avoid ambiguity.',
          ],
        },
        {
          title: 'Reversal and Dispute',
          items: [
            'If value did not reach the beneficiary, open a dispute with your bank. Request formal tracking and timelines for resolution.',
            'Follow up regularly and escalate with case numbers. Provide updated contact information for callbacks.',
          ],
        },
        {
          title: 'Prevention',
          items: [
            'Avoid repeating failed transfers rapidly. Multiple attempts can complicate reconciliation.',
            'Use verified beneficiary details and initiate small test transfers for new recipients before sending large amounts.',
          ],
        },
      ],
      checklist: [
        'Verify posting at both banks.',
        'Preserve receipts and alerts.',
        'Open formal dispute.',
        'Avoid repeated failed attempts.',
      ],
    },
    'pos-operations': {
      description:
        'Run a POS operation professionally: device provisioning, float planning, daily reconciliation, customer support, chargeback handling, staff training, and fraud controls.',
      sections: [
        {
          title: 'Provisioning and Float',
          items: [
            'Source POS terminals from trusted acquirers and register devices properly to your merchant account.',
            'Plan float to cover expected daily volume and peak hours. Track cash and digital balances separately.',
          ],
        },
        {
          title: 'Daily Reconciliation',
          items: [
            'Reconcile terminal batch totals with bank deposits and receipts every day. Investigate mismatches immediately.',
            'Export logs and keep transaction journals for audits. Backup data offsite.',
          ],
        },
        {
          title: 'Customer Support',
          items: [
            'Train staff to handle declines, partial approvals, and duplicate attempts calmly. Provide clear next steps.',
            'Offer receipts and transparent explanations. Escalate to acquiring bank support with full references.',
          ],
        },
        {
          title: 'Chargebacks and Fraud',
          items: [
            'Maintain signed receipts and, where lawful, CCTV evidence to contest fraudulent disputes.',
            'Detect skimming attempts and switch terminals immediately if overlays or tampering are suspected.',
          ],
        },
        {
          title: 'Compliance',
          items: [
            'Keep KYC/merchant documentation current. Review acquirer notices for policy changes.',
            'Update firmware regularly and patch known vulnerabilities to protect cardholder data.',
          ],
        },
      ],
      checklist: [
        'Provision devices and plan float.',
        'Reconcile batches daily.',
        'Train staff; provide clear receipts.',
        'Prepare for chargebacks with evidence.',
      ],
    },
    'govt-ids': {
      description:
        'Navigate NIN, BVN, and other government IDs with clarity: enrollment, verification, linkage, name matching, corrections, and official support channels.',
      sections: [
        {
          title: 'Enrollment',
          items: [
            'Locate official enrollment centers and review required documents before visiting to avoid repeat trips.',
            'Capture biometrics and confirm that personal data is recorded accurately. Errors cause downstream mismatches.',
          ],
        },
        {
          title: 'Verification and Linkage',
          items: [
            'Verify your NIN or BVN via official channels and link numbers to bank accounts and SIMs where mandated.',
            'Check name and date of birth consistency across documents to prevent compliance blocks.',
          ],
        },
        {
          title: 'Corrections',
          items: [
            'If details are wrong, follow official correction procedures. Prepare affidavits or supporting documents as required.',
            'Track case numbers and keep copies of submissions and receipts for follow‑up.',
          ],
        },
        {
          title: 'Security and Privacy',
          items: [
            'Protect sensitive ID documents. Share only when necessary and verify recipients’ legitimacy.',
            'Report suspected misuse of your ID promptly through official channels.',
          ],
        },
      ],
      checklist: [
        'Prepare documents; enroll officially.',
        'Verify and link IDs.',
        'File corrections with evidence.',
        'Safeguard sensitive documents.',
      ],
    },
    'passport-license': {
      description:
        'Obtain or renew passports and driver licenses efficiently: requirements, booking, capture, payment, collection, and remediation for mismatches or delays.',
      sections: [
        {
          title: 'Requirements and Booking',
          items: [
            'Review official requirements and book appointments via approved portals. Avoid intermediaries.',
            'Gather original documents and compliant photos early to prevent last‑minute issues.',
          ],
        },
        {
          title: 'Capture and Payment',
          items: [
            'Attend biometric capture on time with complete documentation. Confirm that data is recorded correctly.',
            'Pay fees through official channels and keep receipts. Verify reference numbers immediately.',
          ],
        },
        {
          title: 'Collection and Renewal',
          items: [
            'Track application status and follow collection instructions. Bring identification and receipts.',
            'Plan renewals ahead of expiry to avoid travel or work disruptions.',
          ],
        },
        {
          title: 'Fixing Issues',
          items: [
            'For name or data mismatches, initiate correction workflows with supporting documents.',
            'Escalate delays with case numbers and maintain a log of communications for accountability.',
          ],
        },
      ],
      checklist: [
        'Book officially; avoid intermediaries.',
        'Complete capture; verify data.',
        'Keep receipts; track status.',
        'Correct mismatches; escalate delays.',
      ],
    },
    'small-business': {
      description:
        'Equip a small business with practical technology: accounting, inventory, POS, CRM, marketing, backups, access control, and staff training.',
      sections: [
        {
          title: 'Core Systems',
          items: [
            'Adopt reliable accounting and inventory tools. Start simple and grow capabilities as processes mature.',
            'Standardize POS and receipt workflows to reduce reconciliation friction across branches.',
          ],
        },
        {
          title: 'Customer Operations',
          items: [
            'Implement CRM for leads and follow‑ups. Record interactions to build institutional memory.',
            'Run basic marketing with trackable campaigns. Measure outcomes and adjust spend.',
          ],
        },
        {
          title: 'Data Protection',
          items: [
            'Back up critical data to cloud with retention policies. Test restores periodically.',
            'Apply least‑privilege access and audit staff accounts regularly.',
          ],
        },
        {
          title: 'People and Process',
          items: [
            'Train staff on fraud awareness, data handling, and basic troubleshooting.',
            'Document SOPs and update them as tools or regulations change.',
          ],
        },
      ],
      checklist: [
        'Set up accounting/inventory.',
        'Standardize POS/receipts.',
        'Back up; audit access.',
        'Train staff; document SOPs.',
      ],
    },
    'remote-work': {
      description:
        'Succeed in remote work: market alignment, portfolio and profiles, disciplined communication, timezone management, payment channels, and local reliability planning.',
      sections: [
        {
          title: 'Market and Positioning',
          items: [
            'Research roles and rates. Align skills with current demand in target markets.',
            'Build a portfolio and optimize profiles with tangible outcomes and testimonials.',
          ],
        },
        {
          title: 'Communication Discipline',
          items: [
            'Establish clear availability, response expectations, and meeting norms. Over‑communicate progress.',
            'Use structured updates and shared documents to reduce ambiguity across timezones.',
          ],
        },
        {
          title: 'Payments and Compliance',
          items: [
            'Set up reliable payment channels and understand fees, settlement times, and compliance requirements.',
            'Maintain invoices, contracts, and tax documentation appropriate to your jurisdiction.',
          ],
        },
        {
          title: 'Local Reliability',
          items: [
            'Plan for power and internet redundancy. Keep backup data plans and offline workflows.',
            'Create a distraction‑resistant workspace and guard deep work hours.',
          ],
        },
      ],
      checklist: [
        'Optimize profile/portfolio.',
        'Clarify communication norms.',
        'Set payment channels.',
        'Plan power/internet redundancy.',
      ],
    },
    freelancing: {
      description:
        'Use freelancing platforms effectively: niche positioning, credible profiles, proposal discipline, escrow safety, client management, and delivery quality.',
      sections: [
        {
          title: 'Positioning',
          items: [
            'Choose a niche and articulate value clearly with specific outcomes and proof.',
            'Curate samples and case studies relevant to typical client problems.',
          ],
        },
        {
          title: 'Profiles and Proposals',
          items: [
            'Write concise, tailored proposals that answer the brief directly. Avoid generic pitches.',
            'Respect platform rules and prioritize verified clients with clear scopes and budgets.',
          ],
        },
        {
          title: 'Safety and Delivery',
          items: [
            'Prefer platform escrow and milestone payments. Avoid off‑platform payments for new clients.',
            'Manage expectations with timelines, progress updates, and change control.',
          ],
        },
      ],
      checklist: [
        'Define niche value.',
        'Tailor proposals.',
        'Use escrow/milestones.',
        'Report and avoid risky clients.',
      ],
    },
    'dollar-earnings': {
      description:
        'Receive foreign currency payments safely: domiciliary accounts, global processors, virtual cards, KYC/AML, FX conversion, and fee awareness.',
      sections: [
        {
          title: 'Accounts and Processors',
          items: [
            'Open a domiciliary account where appropriate and understand documentation requirements.',
            'Evaluate global processors or marketplaces that pay to verified recipients with clear fee structures.',
          ],
        },
        {
          title: 'Compliance',
          items: [
            'Complete KYC/AML fully and keep documents current. Non‑compliance blocks payouts.',
            'Understand local regulations for FX receipts and reporting obligations.',
          ],
        },
        {
          title: 'Fees and Conversion',
          items: [
            'Track fees across processors, banks, and currency conversion steps. Optimize routes to minimize loss.',
            'Use transparent conversion policies and avoid unnecessary conversion hops.',
          ],
        },
      ],
      checklist: [
        'Set up domiciliary/processor accounts.',
        'Complete KYC/AML.',
        'Map fees and conversion steps.',
        'Follow local FX rules.',
      ],
    },
    careers: {
      description:
        'Elevate job search outcomes: ATS‑friendly CVs, portfolio assets, referrals, interview practice, negotiation, and continuous skill development.',
      sections: [
        {
          title: 'Foundations',
          items: [
            'Create ATS‑friendly CVs with quantifiable achievements and relevant keywords.',
            'Build portfolios or repositories that demonstrate real projects and impact.',
          ],
        },
        {
          title: 'Pipeline',
          items: [
            'Network and request referrals. Track applications and follow‑ups systematically.',
            'Prepare tailored cover letters and align experiences to role requirements.',
          ],
        },
        {
          title: 'Interviews and Offers',
          items: [
            'Practice interviews, research companies, and prepare thoughtful questions.',
            'Negotiate offers respectfully with data on market rates and role responsibilities.',
          ],
        },
        {
          title: 'Growth',
          items: [
            'Invest in continuous learning and certifications relevant to your path.',
            'Seek feedback post‑interview to refine materials and strategy.',
          ],
        },
      ],
      checklist: [
        'Optimize CV/portfolio.',
        'Track applications/referrals.',
        'Prepare interviews; negotiate.',
        'Commit to ongoing learning.',
      ],
    },
    'software-howto': {
      description:
        'Master everyday software through clear, step‑wise methods. Focus on installation, updates, configuration, productivity workflows, file formats, troubleshooting, and safety so tools help rather than hinder.',
      sections: [
        {
          title: 'Install and Update',
          items: [
            'Download from official sources only. Verify checksums where published to avoid tampered binaries.',
            'Enable automatic updates or set a recurring reminder to patch monthly. Security fixes often arrive silently.',
          ],
        },
        {
          title: 'Configure and Personalize',
          items: [
            'Create user profiles and sync settings across devices where supported to maintain consistent behavior.',
            'Customize shortcuts, toolbars, and defaults around your tasks. Remove clutter that slows you down.',
          ],
        },
        {
          title: 'Workflows and Productivity',
          items: [
            'Learn core shortcuts and batch operations. Small time savings compound dramatically over weeks.',
            'Use templates and starter files so you begin with structure rather than a blank page.',
          ],
        },
        {
          title: 'Files and Formats',
          items: [
            'Understand export/import capabilities and preferred formats for collaboration.',
            'Adopt naming conventions and version folders to avoid overwriting important work.',
          ],
        },
        {
          title: 'Troubleshooting',
          items: [
            'Clear caches, reset preferences, and reinstall cleanly when behavior degrades.',
            'Consult official logs or verbose modes for actionable error messages before contacting support.',
          ],
        },
        {
          title: 'Safety',
          items: [
            'Back up critical files to cloud or external storage with periodic test restores.',
            'Restrict plugin sources; poorly maintained extensions introduce instability and risk.',
          ],
        },
      ],
      checklist: [
        'Update from official sources.',
        'Customize shortcuts and defaults.',
        'Adopt templates and naming.',
        'Back up; test restores.',
      ],
    },
    'excel-tips': {
      description:
        'Boost Excel and Office productivity with deliberate setup, clean data, powerful formulas, pivot analysis, effective visuals, automation, and collaboration etiquette.',
      sections: [
        {
          title: 'Setup and Hygiene',
          items: [
            'Enable auto‑save and version history where available to recover from mistakes.',
            'Use structured tables with defined headers and consistent data types to avoid formula surprises.',
          ],
        },
        {
          title: 'Clean Data',
          items: [
            'Trim spaces, standardize case, and normalize dates. Use text‑to‑columns and Power Query for repeatable cleanup.',
            'Deduplicate carefully and document assumptions so stakeholders trust the dataset.',
          ],
        },
        {
          title: 'Formulas and Functions',
          items: [
            'Prefer INDEX/XMATCH or XLOOKUP over VLOOKUP for robust lookups and flexible ranges.',
            'Use SUMIFS, COUNTIFS, and FILTER to create dynamic summaries without manual copies.',
          ],
        },
        {
          title: 'Pivot and Analysis',
          items: [
            'Build pivot tables from clean tables to explore patterns quickly.',
            'Add slicers and timelines for interactive filtering; document definitions for viewers.',
          ],
        },
        {
          title: 'Visuals',
          items: [
            'Choose chart types that match the story: line for trends, bar for comparisons, scatter for relationships.',
            'Reduce ink: minimal gridlines, clear labels, and realistic axis scales improve comprehension.',
          ],
        },
        {
          title: 'Automation',
          items: [
            'Record simple macros for repetitive formatting and report generation.',
            'Use Power Query or Office Scripts for robust, shareable automation where supported.',
          ],
        },
        {
          title: 'Collaboration',
          items: [
            'Protect critical ranges, add notes, and use comments for change discussion.',
            'Avoid emailing binaries repeatedly; use shared drives with clear versioning.',
          ],
        },
      ],
      checklist: [
        'Structure data in tables.',
        'Use modern lookup functions.',
        'Create pivots and slicers.',
        'Automate cleanup; share safely.',
      ],
    },
    'ai-tools': {
      description:
        'Leverage AI tools for research, writing, analysis, and automation with strong prompting, privacy awareness, evaluation discipline, and integration into real workflows.',
      sections: [
        {
          title: 'Use Cases',
          items: [
            'Define tasks AI can accelerate: summarization, drafting, code scaffolding, data extraction, and ideation.',
            'Break large tasks into small prompts and iterate with feedback for higher quality outputs.',
          ],
        },
        {
          title: 'Prompting',
          items: [
            'Provide context, constraints, and examples. Specify tone, audience, and format to reduce rework.',
            'Use checklists and rubrics in prompts so outputs can be verified systematically.',
          ],
        },
        {
          title: 'Privacy and Safety',
          items: [
            'Avoid entering secrets or regulated data. Use redaction or synthetic samples during exploration.',
            'Prefer tools with enterprise privacy commitments when handling sensitive material.',
          ],
        },
        {
          title: 'Automation',
          items: [
            'Connect AI to tools via APIs or automations to move from answers to actions.',
            'Log prompts and results for auditability and learning over time.',
          ],
        },
        {
          title: 'Evaluation',
          items: [
            'Compare outputs across tools for critical tasks. Measure accuracy, completeness, and time saved.',
            'Use human review for high‑stakes deliverables; AI augments but does not replace accountability.',
          ],
        },
      ],
      checklist: [
        'Define tasks and constraints.',
        'Iterate with examples.',
        'Protect sensitive data.',
        'Integrate via APIs; review outputs.',
      ],
    },
    'chatgpt-alternatives': {
      description:
        'Explore alternative assistants thoughtfully: strengths, limitations, integrations, pricing, and offline options. Choose based on fit rather than hype.',
      sections: [
        {
          title: 'Capability Profile',
          items: [
            'Assess reasoning, coding, multilingual support, and retrieval features for your tasks.',
            'Test document handling, tool use, and long‑context performance on your real workloads.',
          ],
        },
        {
          title: 'Integrations',
          items: [
            'Check plugins, API availability, and ecosystem maturity. Integrations reduce manual glue work.',
            'Confirm export formats and collaboration options for team workflows.',
          ],
        },
        {
          title: 'Pricing and Limits',
          items: [
            'Review tiers, rate limits, and overage policies. Align costs with expected usage patterns.',
            'Consider team plans with shared billing and access controls for manageability.',
          ],
        },
        {
          title: 'Offline and Private',
          items: [
            'Evaluate local or on‑prem models for privacy‑critical scenarios. Expect trade‑offs in capability.',
            'Plan hardware requirements and maintenance for self‑hosted options.',
          ],
        },
      ],
      checklist: [
        'Test against real tasks.',
        'Verify integrations and exports.',
        'Model costs vs limits.',
        'Consider private/offline needs.',
      ],
    },
    'digital-education': {
      description:
        'Navigate digital education confidently: platforms, credentials, pacing, community, projects, and assessments. Build skills that transfer to real work.',
      sections: [
        {
          title: 'Platform Fit',
          items: [
            'Compare course catalogs, instructor quality, and hands‑on labs. Prefer platforms with robust project support.',
            'Check accreditation or industry recognition where credentials matter.',
          ],
        },
        {
          title: 'Plan and Pace',
          items: [
            'Define weekly study hours and set checkpoints. Consistency beats bursts.',
            'Use spaced repetition and active recall to cement learning.',
          ],
        },
        {
          title: 'Community and Support',
          items: [
            'Join forums, study groups, or cohorts. Peer discussion clarifies difficult topics.',
            'Leverage mentor or TA hours to unblock faster.',
          ],
        },
        {
          title: 'Projects and portfolio',
          items: [
            'Choose capstones that mirror real problems. Document decisions and trade‑offs.',
            'Publish results and reflections to a portfolio for credibility.',
          ],
        },
        {
          title: 'Assessment',
          items: [
            'Prefer practical assessments over pure multiple‑choice where possible.',
            'Track scores and feedback to focus future efforts.',
          ],
        },
      ],
      checklist: [
        'Pick platform and path.',
        'Schedule weekly study blocks.',
        'Engage community/mentors.',
        'Build portfolio projects.',
      ],
    },
    'online-courses': {
      description:
        'Find high‑quality online courses by vetting syllabi, prerequisites, instructor signals, hands‑on components, and expected outcomes. Build a realistic study plan.',
      sections: [
        {
          title: 'Vetting',
          items: [
            'Read the syllabus and assess depth. Look for clear learning outcomes and project work.',
            'Check instructor profiles and sample lessons to gauge teaching quality.',
          ],
        },
        {
          title: 'Prerequisites',
          items: [
            'Confirm prerequisite knowledge and required software or hardware.',
            'Take diagnostic quizzes or preview modules to avoid misalignment.',
          ],
        },
        {
          title: 'Hands‑On',
          items: [
            'Prefer courses with labs, assignments, and feedback. Passive watching limits retention.',
            'Join cohorts or accountability partners for momentum.',
          ],
        },
        {
          title: 'Outcomes and ROI',
          items: [
            'Define goals: certificate, portfolio piece, skill for a job, or personal project.',
            'Estimate time investment and cost vs expected value. Avoid overbuying.',
          ],
        },
        {
          title: 'Study Plan',
          items: [
            'Set weekly targets and review progress. Adjust pace when life events intervene.',
            'Use notes, flashcards, and summaries to consolidate learning.',
          ],
        },
      ],
      checklist: [
        'Vet syllabus/instructor.',
        'Confirm prerequisites.',
        'Prefer hands‑on labs.',
        'Set outcomes and study plan.',
      ],
    },
    'buying-guides': {
      description:
        'Make smart tech purchases: clarify needs, translate them into specs, compare models, verify vendor trust, and plan warranty and after‑sales support. Avoid hype‑driven choices.',
      sections: [
        {
          title: 'Needs to Specs',
          items: [
            'List tasks and constraints (budget, size, battery, performance). Map each to concrete specs.',
            'Prioritize must‑haves over nice‑to‑haves. Clear trade‑offs prevent regret.',
          ],
        },
        {
          title: 'Compare Models',
          items: [
            'Use reputable reviews and spec sheets. Check real‑world tests for thermals and battery life.',
            'Avoid confusing trims; ensure the SKU you buy matches the reviewed configuration.',
          ],
        },
        {
          title: 'Vendor Trust',
          items: [
            'Prefer authorized sellers with transparent return policies.',
            'Beware of counterfeit accessories and inflated “promo” prices without receipts.',
          ],
        },
        {
          title: 'Warranty and After‑Sales',
          items: [
            'Confirm warranty coverage length and process. Record serials and receipts.',
            'Check local service center availability before purchase.',
          ],
        },
        {
          title: 'Nigeria‑Specific',
          items: [
            'Account for FX swings and import duties when planning big purchases.',
            'Verify band compatibility for mobile devices with local carriers.',
          ],
        },
      ],
      checklist: [
        'Map tasks to specs.',
        'Compare tested models.',
        'Buy from trusted vendors.',
        'Record warranty and serials.',
      ],
    },
    'best-phones': {
      description:
        'Choose budget‑friendly phones confidently: prioritize battery, connectivity, camera, storage, and reliable after‑sales. Validate claims with real tests and local compatibility checks.',
      sections: [
        {
          title: 'Core Criteria',
          items: [
            'Battery capacity and efficiency matter more than peak benchmarks for daily use.',
            'Check storage and RAM combinations that prevent stutter under common app loads.',
          ],
        },
        {
          title: 'Connectivity',
          items: [
            'Verify supported bands and carrier aggregation relevant to local networks.',
            'Ensure dual‑SIM behavior matches your needs and supports VoLTE where available.',
          ],
        },
        {
          title: 'Camera Reality',
          items: [
            'Ignore marketing megapixels. Prefer consistent performance in low light and stabilized video.',
            'Test sample photos and evaluate processing preferences (natural vs aggressive smoothing).',
          ],
        },
        {
          title: 'Reliability and Updates',
          items: [
            'Prefer vendors with timely security updates and transparent support lifecycles.',
            'Check repairability and parts availability in local markets.',
          ],
        },
        {
          title: 'Buy and Test',
          items: [
            'Inspect unit, verify IMEI, and run basic diagnostics at purchase.',
            'Test calls, data speed, Wi‑Fi, Bluetooth, GPS, and camera before committing.',
          ],
        },
      ],
      checklist: [
        'Prioritize battery/storage.',
        'Verify bands and VoLTE.',
        'Evaluate camera samples.',
        'Test connectivity features.',
      ],
    },
    'student-laptops': {
      description:
        'Pick laptops for students by balancing performance, battery life, portability, durability, OS preferences, and budget. Aim for smooth study and project work without overspend.',
      sections: [
        {
          title: 'Performance',
          items: [
            'Match CPU and RAM to workload: documents, coding, design, or light gaming.',
            'Prefer SSD storage for responsiveness; plan capacity for coursework and projects.',
          ],
        },
        {
          title: 'Portability and Battery',
          items: [
            'Choose sizes and weights that fit daily carry. Battery life matters more than peak performance for campus days.',
            'Consider display brightness for outdoor use and comfortable keyboards for long typing sessions.',
          ],
        },
        {
          title: 'Durability and Service',
          items: [
            'Check build quality, hinge strength, and port selection. Protective sleeves reduce damage risk.',
            'Verify local service options and student discounts or extended warranties.',
          ],
        },
        {
          title: 'OS and Ecosystem',
          items: [
            'Align OS with course requirements and available software licenses.',
            'Plan backups and cloud sync for assignments across devices.',
          ],
        },
        {
          title: 'Purchase Checklist',
          items: [
            'Inspect unit physically, run battery health checks, and test ports and Wi‑Fi.',
            'Confirm return policy and keep receipts and serial numbers.',
          ],
        },
      ],
      checklist: [
        'Match CPU/RAM to tasks.',
        'Prefer SSD; plan capacity.',
        'Check build and service.',
        'Test unit; record serials.',
      ],
    },
    templates: {
      description:
        'Use templates and checklists to accelerate consistent work: standardize structure, reduce errors, and improve collaboration. Maintain versions and adapt thoughtfully.',
      sections: [
        {
          title: 'Catalog',
          items: [
            'Create a catalog of templates: reports, meeting notes, budgets, project plans, SOPs, and study guides.',
            'Publish where teammates can find them with clear naming and tags.',
          ],
        },
        {
          title: 'Customization',
          items: [
            'Adapt templates to specific contexts while preserving core sections.',
            'Include placeholders and examples to guide contributors.',
          ],
        },
        {
          title: 'Versioning',
          items: [
            'Keep versions with change logs. Deprecate outdated templates gracefully.',
            'Assign ownership for maintenance and review cycles.',
          ],
        },
        {
          title: 'Collaboration',
          items: [
            'Use comments and tasks inside documents to coordinate edits.',
            'Protect critical ranges and automate checks where platforms support it.',
          ],
        },
        {
          title: 'Distribution',
          items: [
            'Provide printable and digital formats. Offer cheat sheets for quick reference.',
            'Train teams briefly on how and when to use each template.',
          ],
        },
      ],
      checklist: [
        'Publish a template catalog.',
        'Customize with guardrails.',
        'Maintain versions and owners.',
        'Enable collaboration workflows.',
      ],
    },
  };

  const detailed = contentMap[slug];
  const isDetailed = !!detailed;
  const sections = detailed?.sections || [];
  const description =
    detailed?.description ||
    `Browse our latest guides, tutorials, and expert advice about ${title}.`;
  const checklist = detailed?.checklist || [];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Topic
              </span>
              {(() => {
                const primary = getContextualImage({
                  category: 'technology',
                  title,
                  alt: title,
                  width: 1200,
                  height: 640,
                  preferCurated: true,
                });
                const curatedList = getCuratedImagesForCategory('technology') || [];
                const fallback = curatedList[0]?.src || '/assets/images/no_image.png';
                const secondaryFallback = curatedList[1]?.src || '/assets/images/no_image.png';
                return (
                  <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-6">
                    <AppImage
                      src={primary.src}
                      alt={primary.alt}
                      fill
                      className="object-cover"
                      fallbackSrc={fallback}
                      secondaryFallbackSrc={secondaryFallback}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                );
              })()}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {isDetailed ? (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {sections.slice(0, 4).map((section, idx) => (
                    <div
                      key={section.title}
                      className="p-0 rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden"
                    >
                      {(() => {
                        const primary = getContextualImage({
                          category: 'technology',
                          title: section.title,
                          alt: section.title,
                          width: 1000,
                          height: 560,
                          preferCurated: true,
                        });
                        const curatedList = getCuratedImagesForCategory('technology') || [];
                        const fallback = curatedList[0]?.src || '/assets/images/no_image.png';
                        const secondaryFallback =
                          curatedList[1]?.src || '/assets/images/no_image.png';
                        return (
                          <div className="relative aspect-[16/9]">
                            <AppImage
                              src={primary.src}
                              alt={primary.alt}
                              fill
                              className="object-cover"
                              fallbackSrc={fallback}
                              secondaryFallbackSrc={secondaryFallback}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                          </div>
                        );
                      })()}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-sm">
                            {idx + 1}
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {sections.slice(4, 8).map((section, idx) => (
                    <div
                      key={section.title}
                      className="p-0 rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden"
                    >
                      {(() => {
                        const primary = getContextualImage({
                          category: 'technology',
                          title: section.title,
                          alt: section.title,
                          width: 1000,
                          height: 560,
                          preferCurated: true,
                        });
                        const curatedList = getCuratedImagesForCategory('technology') || [];
                        const fallback = curatedList[0]?.src || '/assets/images/no_image.png';
                        const secondaryFallback =
                          curatedList[1]?.src || '/assets/images/no_image.png';
                        return (
                          <div className="relative aspect-[16/9]">
                            <AppImage
                              src={primary.src}
                              alt={primary.alt}
                              fill
                              className="object-cover"
                              fallbackSrc={fallback}
                              secondaryFallbackSrc={secondaryFallback}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to透明" />
                          </div>
                        );
                      })()}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold shadow-sm">
                            {idx + 5}
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {sections.slice(8).map((section, idx) => (
                    <div
                      key={section.title}
                      className="p-0 rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden"
                    >
                      {(() => {
                        const primary = getContextualImage({
                          category: 'technology',
                          title: section.title,
                          alt: section.title,
                          width: 1000,
                          height: 560,
                          preferCurated: true,
                        });
                        const curatedList = getCuratedImagesForCategory('technology') || [];
                        const fallback = curatedList[0]?.src || '/assets/images/no_image.png';
                        const secondaryFallback =
                          curatedList[1]?.src || '/assets/images/no_image.png';
                        return (
                          <div className="relative aspect-[16/9]">
                            <AppImage
                              src={primary.src}
                              alt={primary.alt}
                              fill
                              className="object-cover"
                              fallbackSrc={fallback}
                              secondaryFallbackSrc={secondaryFallback}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                          </div>
                        );
                      })()}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                          <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-semibold shadow-sm">
                            {idx + 9}
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-slate-600"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {checklist.length > 0 && (
                  <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Checklist</h3>
                    <p className="text-blue-800 mb-4">Work through these steps in order.</p>
                    <ol className="list-decimal pl-6 space-y-2 text-blue-900">
                      {checklist.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Curating Content</h3>
                  <p className="text-gray-500">
                    We are currently compiling the best resources for {title}. Check back soon for
                    updated guides and articles.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
