<?php

namespace App\Jobs;

use App\Http\Controllers\InactiveGovernmentsController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class InsertInactiveGovernments implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $changedGovernments;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($changes)
    {
        $this->changedGovernments = $changes;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $inactiveGovernmentsController = new InactiveGovernmentsController();
        $inactiveGovernmentsController->addInactiveGovernment($this->changedGovernments);
    }
}
