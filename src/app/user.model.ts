export class User
{
  public likes: string[] = [''];
  public dislikes: string[] = [''];
  public matches: string[] = [''];
  public userId: string = '';

  constructor(
    public username: string,
    public password: string,
    public email: string,
    public gender: string,
    public interestedIn: string,
    public birthday: Date,
    public age: number,
    public sign: string,
    public element: string,
    public location: string,
    public ageRangeMin: number,
    public ageRangeMax: number,
    public description: string = ''){}

}
