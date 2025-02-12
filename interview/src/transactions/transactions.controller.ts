import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransferDto } from './dto/transaction.dto';
import { DepositDto } from './dto/deposit.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('deposit')
  deposit(@Body() createTransactionDto: DepositDto) {}

  @Post('transfer')
  transfer(@Body() createTransactionDto: TransferDto) {}
}
