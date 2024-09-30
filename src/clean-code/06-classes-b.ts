(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    //Forma corta:
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    
    class User extends Person {
        
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date()
            this.email = email;
            this.role = role
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps {
        workingDirectory       : string;
        lastOpenFolder         : string;
        email                  : string;
        role                   : string;
        name                   : string;
        gender                 : Gender;
        birthdate              : Date;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'santiago@google.com',
        role: 'Admin',
        name: 'Santiago',
        gender: 'M',
        birthdate: new Date('1991-08-24')
    });

    console.log({userSettings});




})();