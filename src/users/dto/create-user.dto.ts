import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    default: "John Doe"
  })
  fullName: string;
  @ApiProperty({
    default: "New Entry"
  })
  reason: string;
  @ApiProperty({
    default: new Date()
  })
  dateTime?: string;
}
