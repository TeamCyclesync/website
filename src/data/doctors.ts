import { Doctor } from '@/types/doctor';

export const doctorsData: Doctor[] = [
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    specialization: 'Gynecologist & Obstetrician',
    description: 'Specialized in women\'s reproductive health, pregnancy care, and menstrual disorders. Over 15 years of experience in providing comprehensive gynecological care with a focus on patient comfort and holistic treatment approaches.',
    image: '/assets/docters/docter-1.jpg',
    consultationFee: 800,
    rating: 4.8,
    reviews: 5,
    experience: '15+ years',
    calendlyUrl: 'https://calendly.com/dr-priya-sharma/consultation'
  },
  {
    id: 'dr-kavita-reddy',
    name: 'Dr. Kavita Reddy',
    specialization: 'Reproductive Endocrinologist',
    description: 'Expert in hormonal disorders, PCOS, fertility issues, and reproductive health. Dedicated to helping women achieve optimal hormonal balance through personalized treatment plans and lifestyle modifications.',
    image: '/assets/docters/docter-2.jpg',
    consultationFee: 1200,
    rating: 4.9,
    experience: '12+ years',
    reviews: 10,
    calendlyUrl: 'https://calendly.com/dr-kavita-reddy/consultation'
  },
  {
    id: 'dr-anjali-gupta',
    name: 'Dr. Anjali Gupta',
    specialization: 'Maternal-Fetal Medicine Specialist',
    description: 'Specializes in high-risk pregnancies, prenatal care, and fetal health monitoring. Committed to ensuring safe pregnancies and healthy deliveries with advanced monitoring techniques and compassionate care.',
    image: '/assets/docters/docter-3.jpg',
    consultationFee: 1000,
    rating: 4.7,
    experience: '18+ years',
    reviews: 15,
    calendlyUrl: 'https://calendly.com/dr-anjali-gupta/consultation'
  },
  {
    id: 'dr-rashmi-patel',
    name: 'Dr. Rashmi Patel',
    specialization: 'Adolescent Gynecology',
    description: 'Specializes in adolescent and young women\'s health issues including menstrual irregularities, contraception counseling, and reproductive health education. Creates a comfortable environment for young patients.',
    image: '/assets/docters/docter-1.jpg',
    consultationFee: 700,
    rating: 4.6,
    experience: '10+ years',
    reviews: 8,
    calendlyUrl: 'https://calendly.com/dr-rashmi-patel/consultation'
  },
  {
    id: 'dr-nandini-shah',
    name: 'Dr. Nandini Shah',
    specialization: 'Menopause Specialist',
    description: 'Expert in menopause management, hormone replacement therapy, and women\'s health during midlife transitions. Helps women navigate menopause with confidence and optimal health strategies.',
    image: '/assets/docters/docter-2.jpg',
    consultationFee: 900,
    rating: 4.8,
    experience: '14+ years',
    reviews: 12,
    calendlyUrl: 'https://calendly.com/dr-nandini-shah/consultation'
  }
];

export const getDoctorById = (id: string): Doctor | undefined => {
  return doctorsData.find(doctor => doctor.id === id);
};

export const getDoctorsBySpecialization = (specialization: string): Doctor[] => {
  return doctorsData.filter(doctor => doctor.specialization.toLowerCase().includes(specialization.toLowerCase()));
};

export const getTopRatedDoctors = (limit: number = 3): Doctor[] => {
  return [...doctorsData].sort((a, b) => b.rating - a.rating).slice(0, limit);
};


