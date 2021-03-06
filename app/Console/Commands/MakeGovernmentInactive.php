<?php

namespace App\Console\Commands;

use App\Jobs\InsertInactiveGovernments;
use App\Jobs\MakeUnattachedGovernmentsInActive;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Bus;

class MakeGovernmentInactive extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'makeGovernmentInactive';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'make governments not attached to cities inactive';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        MakeUnattachedGovernmentsInActive::dispatch();
    }
}
