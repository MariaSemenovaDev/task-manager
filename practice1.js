// 1 _______________________________

const user = {
    name: "Maria",
    age: 25,
    subscription: "premium",
    lastLogin: 14
};

const nameType = typeof user.name;
const ageType = typeof user.age;
const subscriptionType = typeof user.subscription;
const lastLoginType = typeof user.lastLogin;

const name = String(user.name)
const age = Number(user.age);
const subscription = String(user.subscription)
const lastLogin = Number(user.lastLogin)

// 2 _______________________________

function validateAge (age) {
//  if(typeof(age) === 'number' && age > 0) {
//     return true
//  }
//  return false
    function validateAge(age) {
        return typeof age === 'number' && age > 0;
    }
}

const validateName = function (name) {
    return typeof name === 'string' && name.trim().length > 0;
};

const validateSubscription = (subscription) => {
    switch (subscription) {
        case "free":
            return true
            break
        case "basic":
            return true
            break
        case "premium":
            return true
            break
        default:
            return false
    }
};
// 3 _______________________________

const getTimeOfDay = (lastLogin) => {
    const lastLoginNumber = Number(lastLogin);

    return lastLoginNumber >= 5 && lastLoginNumber <= 11
        ? "утро"
        : lastLoginNumber >= 12 && lastLoginNumber <= 17
            ? "день"
            : lastLoginNumber >= 18 && lastLoginNumber <= 21
                ? "вечер"
                : lastLoginNumber >= 22 || lastLoginNumber <= 4
                    ? "ночь"
                    : false;
};

// 4 _______________________________

const getAccessLevel = (subscription) => {
    const access = subscription === "premium"
        ? "Полный доступ"
        : subscription === "basic"
            ? "Ограниченный доступ"
            :  subscription === "free"
                ? "Доступ только к бесплатному контенту"
                : undefined

    return access ?? "Неизвестная подписка";
};
// 5, 6 _______________________________

const name = "Maria";

const displayUserInfo = (age, timeOfDay, accessLevel, lastLogin) => {
    let message = `Привет, ${name}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`;

    if (age < 18) {
        message += " Вы несовершеннолетний пользователь.";
    }

    if (lastLogin >= 22 || lastLogin < 5) {
        message += " Позднее время для входа.";
    }

    return message;
};
console.log(displayUserInfo(25, "вечер", "Полный доступ"));
