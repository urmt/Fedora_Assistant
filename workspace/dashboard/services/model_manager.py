import logging
from huggingface_hub import snapshot_download
import torch

logger = logging.getLogger(__name__)

MODEL_CONFIGURATIONS = {
    "CodeBERT Small": {
        "repo_id": "huggingface/CodeBERTa-small-v1",
        "filename": None,
        "revision": "main",
        "context_length": 512,
        "device": "cuda" if torch.cuda.is_available() else "cpu",
        # Optional: Add tokenizer and model class if required by loading logic
        # "tokenizer_class": "RobertaTokenizer",
        # "model_class": "RobertaForMaskedLM"
    },
    # Add other existing models here if the original file has them, e.g.:
    # "llama-2-7b": {"repo_id": "meta-llama/Llama-2-7b-hf", ...}
}

def download_model(model_name):
    if model_name not in MODEL_CONFIGURATIONS:
        logger.error(f"Model {model_name} not found in configurations")
        raise ValueError(f"400: Failed to download model {model_name}")
    
    config = MODEL_CONFIGURATIONS[model_name]
    try:
        path = snapshot_download(
            repo_id=config["repo_id"],
            revision=config.get("revision", "main"),
            allow_patterns=config["filename"]
        )
        logger.info(f"Model {model_name} downloaded to {path}")
        return path
    except Exception as e:
        logger.error(f"Error downloading model {model_name}: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))

# Add any other functions from the original file here, e.g., load_model, list_models, etc.
def list_models():
    return list(MODEL_CONFIGURATIONS.keys())

# If the original has more, merge it in.
