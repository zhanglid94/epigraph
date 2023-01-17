/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/cryptoModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '81',
    },
    {
      id: 2,
      label: 'Features',
      path: '#key-features',
      offset: '81',
    },
    {
      id: 3,
      label: 'Products',
      path: '#products',
      offset: '81',
    },
    {
      id: 4,
      label: 'Target Users',
      path: '#targetUsers',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/cryptoModern/feature-1.png';
import featureIcon2 from 'common/assets/image/cryptoModern/feature-2.png';
import featureIcon3 from 'common/assets/image/cryptoModern/feature-3.png';
import featureIcon4 from 'common/assets/image/cryptoModern/feature-4.png';

export const Features = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Truthless',
    description:
      'Transparent proof-of-deposit from on-chain data. Flexible staking and instant settlement. Hundreds of crypto-market metrics monitored.',
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'One-stop solution',
    description:
      'Diversified investment strategies for different market conditions. Risk hedged with sophisticated derivative, perpetual options, and structured products.',
  },
  {
    id: 4,
    icon: featureIcon4,
    title: 'Chain-agnostic',
    description:
      'Layer 0 investment products/strategies for all major blockchains. Aggregator for best available DeFi opportunities. Democratize hedge fund strategies.',
  },
  {
    id: 3,
    icon: featureIcon3,
    title: 'Crypto-native',
    description:
      'Build the products based on blockchain’s inherent properties. Undercover the intrinsic of AMM.',
  },
];

/* ------------------------------------ */
// Wallet  data section
/* ------------------------------------ */
import walletIcon1 from 'common/assets/image/cryptoModern/retail.png';
import walletIcon2 from 'common/assets/image/cryptoModern/ins.png';
import walletIcon3 from 'common/assets/image/cryptoModern/so.png';
import walletIcon4 from 'common/assets/image/cryptoModern/mm.png';

export const WalletFeatures = [
  {
    id: 1,
    icon: walletIcon1,
    title: 'Retail Users',
  },
  {
    id: 2,
    icon: walletIcon2,
    title: 'Institutions',
  },
  {
    id: 3,
    icon: walletIcon3,
    title: 'DAOs & protocol treasuries',
  },
  {
    id: 4,
    icon: walletIcon4,
    title: 'Market Makers & Liquidity Providers',
  }
];

/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 1,
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    id: 2,
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    id: 3,
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    id: 4,
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const Footer_Data = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];
