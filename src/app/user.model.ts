export class User
{

  constructor(
    public username: string,
    public password: string,
    public email: string,
    public gender: string,
    public interestedIn: string,
    public birthday: Date,
    public age: number,
    public sign: string,
    public location: string,
    public ageRangeMin: number,
    public ageRangeMax: number,
    public description: string = ''){}
}
