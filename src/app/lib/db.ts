/** @format */

interface User {
  id: string;
  name: string;
  lastname: string;
  age: number;
  numberOfUsage: number;
  isFirstUsage: boolean;
  moneyPaid: number;
  email: string;
  phoneNumber: string;
  address: string;
  registrationDate: string;
  lastLoginDate: string;
  subscriptionType: string;
  preferredContactMethod: string;
  loyaltyPoints: number;
  accountStatus: string;
}
// This is a mock database. In a real application, you'd use a proper database.
let users: User[] = [
  {
    id: "1",
    name: "John",
    lastname: "Doe",
    age: 28,
    numberOfUsage: 15,
    isFirstUsage: false,
    moneyPaid: 250.75,
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Elm Street, Springfield, IL",
    registrationDate: "2023-05-12",
    lastLoginDate: "2025-01-12",
    subscriptionType: "Premium",
    preferredContactMethod: "Email",
    loyaltyPoints: 500,
    accountStatus: "Active",
  },
  {
    id: "2",
    name: "Jane",
    lastname: "Smith",
    age: 34,
    numberOfUsage: 8,
    isFirstUsage: false,
    moneyPaid: 120.0,
    email: "janesmith@example.com",
    phoneNumber: "987-654-3210",
    address: "456 Oak Avenue, Metropolis, NY",
    registrationDate: "2024-02-25",
    lastLoginDate: "2025-01-10",
    subscriptionType: "Standard",
    preferredContactMethod: "Phone",
    loyaltyPoints: 320,
    accountStatus: "Active",
  },
  {
    id: "3",
    name: "Michael",
    lastname: "Brown",
    age: 45,
    numberOfUsage: 20,
    isFirstUsage: false,
    moneyPaid: 540.5,
    email: "michaelbrown@example.com",
    phoneNumber: "555-123-4567",
    address: "789 Pine Road, Gotham, TX",
    registrationDate: "2023-08-09",
    lastLoginDate: "2025-01-11",
    subscriptionType: "Premium",
    preferredContactMethod: "Email",
    loyaltyPoints: 700,
    accountStatus: "Active",
  },
  {
    id: "4",
    name: "Emily",
    lastname: "Johnson",
    age: 22,
    numberOfUsage: 5,
    isFirstUsage: false,
    moneyPaid: 60.0,
    email: "emilyjohnson@example.com",
    phoneNumber: "321-654-9870",
    address: "101 Maple Lane, Smallville, KS",
    registrationDate: "2024-12-15",
    lastLoginDate: "2025-01-12",
    subscriptionType: "Basic",
    preferredContactMethod: "SMS",
    loyaltyPoints: 150,
    accountStatus: "Active",
  },
  {
    id: "5",
    name: "William",
    lastname: "Davis",
    age: 29,
    numberOfUsage: 18,
    isFirstUsage: false,
    moneyPaid: 330.0,
    email: "williamdavis@example.com",
    phoneNumber: "789-123-4560",
    address: "202 Birch Boulevard, Star City, CA",
    registrationDate: "2023-11-21",
    lastLoginDate: "2025-01-09",
    subscriptionType: "Standard",
    preferredContactMethod: "Email",
    loyaltyPoints: 450,
    accountStatus: "Active",
  },
  {
    id: "6",
    name: "Olivia",
    lastname: "Wilson",
    age: 31,
    numberOfUsage: 22,
    isFirstUsage: false,
    moneyPaid: 600.0,
    email: "oliviawilson@example.com",
    phoneNumber: "456-789-1234",
    address: "303 Cedar Street, Central City, FL",
    registrationDate: "2023-10-15",
    lastLoginDate: "2025-01-12",
    subscriptionType: "Premium",
    preferredContactMethod: "Email",
    loyaltyPoints: 800,
    accountStatus: "Active",
  },
  {
    id: "7",
    name: "Liam",
    lastname: "Martinez",
    age: 40,
    numberOfUsage: 12,
    isFirstUsage: false,
    moneyPaid: 240.0,
    email: "liammartinez@example.com",
    phoneNumber: "789-456-1230",
    address: "404 Walnut Avenue, Coast City, CA",
    registrationDate: "2024-01-30",
    lastLoginDate: "2025-01-11",
    subscriptionType: "Standard",
    preferredContactMethod: "Phone",
    loyaltyPoints: 600,
    accountStatus: "Active",
  },
  {
    id: "8",
    name: "Sophia",
    lastname: "Garcia",
    age: 27,
    numberOfUsage: 10,
    isFirstUsage: false,
    moneyPaid: 150.0,
    email: "sophiagarcia@example.com",
    phoneNumber: "123-789-4560",
    address: "505 Cherry Lane, Keystone City, PA",
    registrationDate: "2024-03-12",
    lastLoginDate: "2025-01-08",
    subscriptionType: "Basic",
    preferredContactMethod: "SMS",
    loyaltyPoints: 400,
    accountStatus: "Active",
  },
  {
    id: "9",
    name: "James",
    lastname: "Hernandez",
    age: 33,
    numberOfUsage: 17,
    isFirstUsage: false,
    moneyPaid: 360.0,
    email: "jameshernandez@example.com",
    phoneNumber: "321-789-6540",
    address: "606 Palm Street, Riverdale, GA",
    registrationDate: "2023-12-05",
    lastLoginDate: "2025-01-07",
    subscriptionType: "Standard",
    preferredContactMethod: "Email",
    loyaltyPoints: 500,
    accountStatus: "Active",
  },
  {
    id: "10",
    name: "Isabella",
    lastname: "Lopez",
    age: 24,
    numberOfUsage: 7,
    isFirstUsage: false,
    moneyPaid: 90.0,
    email: "isabellalopez@example.com",
    phoneNumber: "654-789-1230",
    address: "707 Elm Avenue, Bludhaven, NJ",
    registrationDate: "2024-06-18",
    lastLoginDate: "2025-01-05",
    subscriptionType: "Basic",
    preferredContactMethod: "Phone",
    loyaltyPoints: 250,
    accountStatus: "Active",
  },
  {
    id: "11",
    name: "Benjamin",
    lastname: "Gonzalez",
    age: 36,
    numberOfUsage: 14,
    isFirstUsage: false,
    moneyPaid: 280.0,
    email: "benjamingonzalez@example.com",
    phoneNumber: "987-321-4567",
    address: "808 Spruce Street, Emerald City, WA",
    registrationDate: "2024-07-10",
    lastLoginDate: "2025-01-06",
    subscriptionType: "Standard",
    preferredContactMethod: "Email",
    loyaltyPoints: 550,
    accountStatus: "Active",
  },
  {
    id: "12",
    name: "Charlotte",
    lastname: "Perez",
    age: 38,
    numberOfUsage: 19,
    isFirstUsage: false,
    moneyPaid: 410.0,
    email: "charlotteperez@example.com",
    phoneNumber: "654-321-7890",
    address: "909 Oak Street, Hill Valley, CA",
    registrationDate: "2023-09-22",
    lastLoginDate: "2025-01-04",
    subscriptionType: "Premium",
    preferredContactMethod: "SMS",
    loyaltyPoints: 900,
    accountStatus: "Active",
  },
  {
    id: "13",
    name: "Alexander",
    lastname: "Miller",
    age: 41,
    numberOfUsage: 21,
    isFirstUsage: false,
    moneyPaid: 550.0,
    email: "alexandermiller@example.com",
    phoneNumber: "321-654-9871",
    address: "1001 Maple Street, Springfield, MO",
    registrationDate: "2023-11-05",
    lastLoginDate: "2025-01-03",
    subscriptionType: "Premium",
    preferredContactMethod: "Email",
    loyaltyPoints: 950,
    accountStatus: "Active",
  },
  {
    id: "14",
    name: "Ava",
    lastname: "Martinez",
    age: 26,
    numberOfUsage: 13,
    isFirstUsage: false,
    moneyPaid: 260.0,
    email: "avamartinez@example.com",
    phoneNumber: "789-654-1234",
    address: "1102 Birch Avenue, Central City, OH",
    registrationDate: "2024-05-14",
    lastLoginDate: "2025-01-02",
    subscriptionType: "Standard",
    preferredContactMethod: "Phone",
    loyaltyPoints: 600,
    accountStatus: "Active",
  },
  {
    id: "15",
    name: "Ethan",
    lastname: "Lee",
    age: 30,
    numberOfUsage: 16,
    isFirstUsage: false,
    moneyPaid: 320.0,
    email: "ethanlee@example.com",
    phoneNumber: "123-654-7891",
    address: "1203 Cedar Lane, Gotham, TX",
    registrationDate: "2024-08-18",
    lastLoginDate: "2025-01-01",
    subscriptionType: "Standard",
    preferredContactMethod: "SMS",
    loyaltyPoints: 550,
    accountStatus: "Active",
  },
  {
    id: "16",
    name: "Mia",
    lastname: "Thomas",
    age: 25,
    numberOfUsage: 9,
    isFirstUsage: false,
    moneyPaid: 135.0,
    email: "miathomas@example.com",
    phoneNumber: "987-654-1234",
    address: "1304 Pine Street, Metropolis, NY",
    registrationDate: "2024-09-19",
    lastLoginDate: "2024-12-31",
    subscriptionType: "Basic",
    preferredContactMethod: "Email",
    loyaltyPoints: 300,
    accountStatus: "Active",
  },
  {
    id: "17",
    name: "David",
    lastname: "Rodriguez",
    age: 37,
    numberOfUsage: 11,
    isFirstUsage: false,
    moneyPaid: 220.0,
    email: "davidrodriguez@example.com",
    phoneNumber: "456-321-7890",
    address: "1405 Walnut Avenue, Star City, CA",
    registrationDate: "2023-10-05",
    lastLoginDate: "2024-12-30",
    subscriptionType: "Standard",
    preferredContactMethod: "Phone",
    loyaltyPoints: 500,
    accountStatus: "Active",
  },
  {
    id: "18",
    name: "Amelia",
    lastname: "Martinez",
    age: 32,
    numberOfUsage: 18,
    isFirstUsage: false,
    moneyPaid: 360.0,
    email: "ameliamartinez@example.com",
    phoneNumber: "789-321-6540",
    address: "1506 Elm Street, Smallville, KS",
    registrationDate: "2024-11-21",
    lastLoginDate: "2024-12-29",
    subscriptionType: "Standard",
    preferredContactMethod: "Email",
    loyaltyPoints: 700,
    accountStatus: "Active",
  },
  {
    id: "19",
    name: "Lucas",
    lastname: "Hernandez",
    age: 39,
    numberOfUsage: 20,
    isFirstUsage: false,
    moneyPaid: 400.0,
    email: "lucashernandez@example.com",
    phoneNumber: "321-123-4567",
    address: "1607 Maple Lane, Bludhaven, NJ",
    registrationDate: "2023-12-25",
    lastLoginDate: "2024-12-28",
    subscriptionType: "Premium",
    preferredContactMethod: "Phone",
    loyaltyPoints: 850,
    accountStatus: "Active",
  },
  {
    id: "20",
    name: "Ella",
    lastname: "Lopez",
    age: 29,
    numberOfUsage: 15,
    isFirstUsage: false,
    moneyPaid: 300.0,
    email: "ellalopez@example.com",
    phoneNumber: "654-123-7890",
    address: "1708 Birch Street, Hill Valley, CA",
    registrationDate: "2024-01-15",
    lastLoginDate: "2024-12-27",
    subscriptionType: "Standard",
    preferredContactMethod: "SMS",
    loyaltyPoints: 650,
    accountStatus: "Active",
  },
  {
    id: "21",
    name: "Daniel",
    lastname: "Gonzalez",
    age: 35,
    numberOfUsage: 19,
    isFirstUsage: false,
    moneyPaid: 380.0,
    email: "danielgonzalez@example.com",
    phoneNumber: "987-123-6540",
    address: "1809 Pine Road, Keystone City, PA",
    registrationDate: "2023-11-08",
    lastLoginDate: "2024-12-26",
    subscriptionType: "Premium",
    preferredContactMethod: "Email",
    loyaltyPoints: 800,
    accountStatus: "Active",
  },
  {
    id: "22",
    name: "Harper",
    lastname: "Smith",
    age: 24,
    numberOfUsage: 8,
    isFirstUsage: false,
    moneyPaid: 160.0,
    email: "harpersmith@example.com",
    phoneNumber: "456-987-3210",
    address: "1901 Cedar Avenue, Riverdale, GA",
    registrationDate: "2024-05-06",
    lastLoginDate: "2024-12-25",
    subscriptionType: "Basic",
    preferredContactMethod: "Phone",
    loyaltyPoints: 300,
    accountStatus: "Active",
  },
];

export function getUsers() {
  return users;
}

export function getUser(id: string) {
  return users.find((user) => user.id === id);
}

export function createUser(user: User) {
  const newUser = { ...user, id: String(users.length + 1) };
  users.push(newUser);
  return newUser;
}

export function updateUser(
  id: string,
  update: { name?: string; email?: string }
) {
  const user = users.find((user) => user.id === id);
  if (user) {
    Object.assign(user, update);
    return user;
  }
  return null;
}

export function deleteUser(id: string) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const [deletedUser] = users.splice(index, 1);
    return deletedUser;
  }
  return null;
}
