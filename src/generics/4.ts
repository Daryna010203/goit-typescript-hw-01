type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  initialValues: User,
  updatenitialValues: Partial<User>
): User {
  return { ...initialValues, ...updatenitialValues };
}

const originalProfile: User = {
  name: "Olga",
  surname: "Ivanova",
  email: "olga_i125@gmail.com",
  password: "sfasca144613",
};

createOrUpdateUser(originalProfile, {
  email: "user@mail.com",
  password: "password123",
});
