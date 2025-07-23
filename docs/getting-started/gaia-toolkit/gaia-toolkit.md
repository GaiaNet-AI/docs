---
sidebar_position: 9
---


# Gaia CLI Toolkit

The Gaia CLI Toolkit is a comprehensive command-line interface tool for managing and running various AI models through GaiaNet nodes. It provides intelligent model selection, system-aware recommendations, and seamless setup for your own AI infrastructure.

## Installation

Install the toolkit globally via npm:

```bash
npm install -g gaia-toolkit
```

### Prerequisites

- Node.js environment
- Sufficient system RAM (see [System Requirements](#system-requirements))
- Internet connection for initial setup
- Terminal with TTY support for interactive prompts

## Quick Start

Get started with these essential commands:

```bash
# Show welcome banner and available commands
gaia

# Browse available models with filtering options
gaia list

# Get detailed information about a specific model
gaia info llama3-8b

# Quick model deployment (install and run)
gaia run llama3-8b

# Start interactive setup process
gaia setup

# Get personalized model recommendations
gaia recommend
```

## Key Features

### Smart Model Management
- **Dynamic Model Discovery**: Automatically fetches available models from the GaiaNet repository
- **Command-Line Model Browsing**: List and filter models by size and use case
- **Intelligent Categorization**: Models categorized by size with clear RAM requirements
- **Use Case Analysis**: Models tagged with specific use cases (coding, chat, creative writing, etc.)
- **Direct Model Deployment**: One-command installation and execution with `gaia run`
- **Fallback Support**: Includes reliable fallback models when online repository is unavailable

### System-Aware Intelligence
- **RAM Analysis**: Automatically detects your system's available memory
- **Smart Recommendations**: Provides personalized suggestions based on your hardware
- **Resource Warnings**: Warns about potential performance issues before installation
- **Safety Mechanisms**: Blocks oversized models that exceed system RAM
- **Compatibility Checks**: Validates system requirements against model requirements

### Interactive User Experience
- **Beautiful ASCII Art Banner**: Professional welcome screen with Gaia branding
- **Interactive Prompts**: Guided setup process with clear choices
- **Progress Indicators**: Real-time feedback during installation and setup
- **Error Handling**: Graceful fallback and helpful error messages

## Command Reference

### `gaia`
Shows the welcome banner with available commands and quick start information.

```bash
gaia
```

### `gaia list`
Browse available models with filtering options. Models are organized by size category with use cases clearly displayed.

```bash
gaia list [options]
```

**Options:**
- `-s, --size <size>`: Filter by size (small, standard, medium, heavy, big, max)
- `-u, --use-case <useCase>`: Filter by use case (coding, chat, creative, etc.)
- `-f, --format <format>`: Output format (table or json)

**Examples:**
```bash
gaia list --size small --use-case coding
gaia list --format json
```

### `gaia info <model>`
Get detailed model information including specifications, use cases, system requirements, and compatibility check.

```bash
gaia info <model>
```

**Example:**
```bash
gaia info llama3-8b
```

This command provides:
- Model specifications (ID, name, and size category)
- Use cases and capabilities
- System requirements (RAM requirements and performance characteristics)
- Compatibility check against your system
- Step-by-step installation instructions

### `gaia run <model>`
Quick model deployment - directly install and run any model with built-in safety mechanisms.

```bash
gaia run <model> [options]
```

**Options:**
- `--skip-install`: Skip GaiaNet installation if already installed
- `--force`: Override safety check ⚠️ **EXTREMELY DANGEROUS** - see [Force Flag Security](#force-flag-security)

**Examples:**
```bash
gaia run phi3-mini
gaia run phi3-mini --skip-install
```

**Workflow:** Validate → Install → Initialize → Start

#### Force Flag Security (`--force`)

:::danger
The `--force` flag requires multiple security confirmations to prevent system crashes. Use with extreme caution.
:::

The force flag protection includes:
1. **System Analysis Display**: Shows exact RAM shortage
2. **Risk Acknowledgment**: Must confirm understanding of crash risks
3. **5-Second Cooling Period**: Enforced wait time to read warnings
4. **Explicit Selection**: Choose from cancel or accept responsibility
5. **Type Confirmation**: Must type "I accept all risks" exactly
6. **Final Countdown**: 3-second countdown with last chance to cancel

Potential consequences include:
- System freezes requiring hard reset
- Loss of unsaved work in other applications
- Potential hardware stress from memory overload

### `gaia setup`
Interactive model selection and installation process with guided steps.

```bash
gaia setup
```

This command provides:
1. **System Analysis**: Checks your RAM and provides recommendations
2. **Category Selection**: Choose from Small, Medium, or Big model categories
3. **Model Selection**: Pick a specific model from your chosen category
4. **Installation**: Automatically installs GaiaNet node and configures your model
5. **Launch**: Starts your AI node with the selected model

### `gaia recommend`
Get personalized model recommendations based on your specific use case.

```bash
gaia recommend
```

Available recommendation categories:
- **Coding & Programming**: Specialized models for development tasks
- **General Chat & Conversation**: Models optimized for natural dialogue
- **Creative Writing**: Models designed for creative content generation
- **Research & Analysis**: Models suited for analytical tasks
- **Resource-Constrained Environment**: Small/lightweight models for limited hardware
- **General Purpose**: Versatile models for various tasks

### `gaia help`
Comprehensive model selection guide with detailed information.

```bash
gaia help
```

Includes:
- System requirements breakdown
- Performance vs resource trade-offs
- Use case-specific recommendations
- Quick selection tips for beginners

### `gaia welcome`
Displays the welcome banner with command overview.

```bash
gaia welcome
```

## System Requirements

### RAM-Based Recommendations

| System RAM | Supported Models | Recommendations |
|------------|------------------|-----------------|
| < 8GB | Very limited | Consider upgrading for AI model support |
| 8-16GB | Small models (1B-5B parameters) | Recommended for basic tasks |
| 16GB | Small and Standard models (up to 9B parameters) | Good for most use cases |
| 24GB | Small, Standard, and Medium models (up to 16B parameters) | Enhanced capabilities |
| 32GB | Small through Heavy models (up to 24B parameters) | Professional workloads |
| 64GB | Small through Big models (up to 70B parameters) | Enterprise tasks |
| 128GB+ | All model categories including Max models (70B+) | Maximum capabilities |

### Model Categories

#### 🟢 Small Models (1B-5B parameters) - 8-16GB RAM
- **Phi-3 Mini**: Excellent performance-to-size ratio
- **ExaOne 2.4B**: Good for multilingual tasks
- **Ideal for**: Quick responses, basic tasks, mobile/edge deployment

#### 🟡 Standard Models (6B-9B parameters) - 16GB RAM
- **Llama 3 8B**: Versatile and well-tested
- **9B models**: Run comfortably on 16GB systems
- **Ideal for**: Balanced performance, most common use cases

#### 🟠 Medium Models (10B-16B parameters) - 24GB RAM
- **13B models**: Enhanced capabilities
- **Ideal for**: Advanced features, better context understanding

#### 🔵 Heavy Models (17B-24B parameters) - 32GB RAM
- **Codestral 22B**: Specialized for programming tasks
- **Ideal for**: Complex reasoning, professional workloads

#### 🔴 Big Models (25B-70B parameters) - 64GB RAM
- **30B-70B models**: Maximum performance
- **Ideal for**: Enterprise tasks, research, complex analysis

#### ⚫ Max Models (70B+ parameters) - 128GB+ RAM
- **DeepSeek, Llama 70B+**: Top-tier capabilities
- **Ideal for**: Contact team for enterprise/cloud deployment

## Use Case Recommendations

### 🔧 Coding & Programming
- **Small models**: Basic code completion, syntax help
- **Medium models**: Better code understanding, debugging assistance
- **Big models**: Advanced code generation, complex problem solving
- **Recommended**: Codestral 22B (if RAM > 24GB) or Llama 3 8B

### 💬 General Chat & Conversation
- **Small models**: Quick responses, basic conversations
- **Medium models**: More natural conversations, better context
- **Big models**: Human-like interactions, complex discussions
- **Recommended**: Llama 3 8B or Phi-3 Mini (for faster responses)

### ✍️ Creative Writing
- **Small models**: Simple creative tasks, short stories
- **Medium models**: Better storytelling, character development
- **Big models**: Complex narratives, nuanced writing styles
- **Recommended**: Medium or Big instruct models for best creativity

### ⚡ Resource-Constrained Environments
- Focus on **Small models** (1B-5B parameters)
- **Phi-3 Mini**: Excellent performance-to-size ratio
- **ExaOne 2.4B**: Good for multilingual tasks

## Safety Features

The toolkit includes comprehensive safety mechanisms:

- **Resource Validation**: Checks system capabilities before model selection
- **Performance Warnings**: Alerts when selected model may exceed system limits
- **Multi-Layer Safety**: `gaia run` blocks oversized models with 6-step override process
- **Force Flag Protection**: Requires explicit acknowledgment, typing test, and countdown
- **System Crash Prevention**: Clear warnings about RAM shortage and potential consequences
- **Graceful Fallbacks**: Handles network issues and repository unavailability
- **Error Recovery**: Provides helpful error messages and recovery options

## Troubleshooting

### Common Issues

**TTY Error**
Ensure you're running in a terminal with TTY support.

**Memory Issues**
Check system RAM and consider smaller models. Use `gaia recommend` for suggestions based on your hardware.

**Network Issues**
The toolkit includes fallback models for offline scenarios.

**Permission Errors**
Ensure proper file permissions for installation. You may need to run with `sudo` on some systems.

### Getting Help

- Run `gaia help` for comprehensive guidance
- Use `gaia recommend` for personalized suggestions
- Check system requirements before model selection
- Join the [Gaia community](https://t.me/+a0bJInD5lsYxNDJl) for support

## Next Steps

After setting up your model with the CLI toolkit:

1. **Explore Node Configuration**: Learn how to [customize your node](/category/node-guide)
2. **Domain Setup**: Deploy your node to a [custom domain](/category/node-guide/quick-start#configure-the-subdomain)
3. **API Integration**: Use your node with various [frameworks and integrations](/category/gaianet-domain)
4. **Build Applications**: Start building with [decentralized AI agents](/category/agent-frameworks)

---

*The Gaia CLI Toolkit is an open-source project. Contributions are welcome on [GitHub](https://github.com/GaiaNet-AI/gaia-toolkit).*