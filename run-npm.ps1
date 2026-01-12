# Helper script to run npm commands with execution policy bypass
# Usage: .\run-npm.ps1 install
#        .\run-npm.ps1 run dev

param(
    [Parameter(Mandatory=$true)]
    [string[]]$Command
)

$commandString = $Command -join " "
powershell -ExecutionPolicy Bypass -Command "npm $commandString"
